import * as React from 'react';
import { View } from 'react-native';

import * as Styled from './styles';
import Arrow from '../../arrow';
import Pressable from '../../pressable';
import Text, { TextProps } from '../../text';

export interface JSONArrayProps {
	data: any;
	name: string;
	isCollapsed: (keyPath: string[], deep: number, data: any) => boolean;
	onExpand: (keyPath: string[], deep: number, data: any) => void;
	keyPath?: string[];
	deep?: number;
	registry: any;
	size: TextProps['size'];
}

export const JSONArray = ({
	data,
	name,
	isCollapsed,
	onExpand,
	keyPath = [],
	deep = 0,
	registry,
	size,
}: JSONArrayProps) => {
	const _keyPath = deep === -1 ? [] : [...keyPath, name];
	const nextDeep = deep + 1;
	const [collapsed, setCollapsed] = React.useState(isCollapsed(_keyPath, deep, data));
	const JSONNode = registry.node;

	const handleCollapse = () => {
		if (collapsed) {
			onExpand(_keyPath, deep, data);
		}
		setCollapsed(!collapsed);
	};

	const renderCollapsed = () => {
		const collapseValue = ' [...]';
		const numberOfItems = data.length;
		const itemName = numberOfItems === 0 || numberOfItems > 1 ? 'items' : 'item';

		return (
			<Text type="secondary" size={size}>
				{collapseValue} {numberOfItems} {itemName}
			</Text>
		);
	};

	const renderNotCollapsed = () => {
		const keyList = Object.getOwnPropertyNames(data);

		const list = data.map((item: any, index: number) => (
			<JSONNode
				key={index}
				name={`${index}`}
				data={item}
				keyPath={_keyPath}
				deep={nextDeep}
				isCollapsed={isCollapsed}
				onExpand={onExpand}
				registry={registry}
				size={size}
			/>
		));

		return <View>{list}</View>;
	};

	return (
		<Styled.ObjectNode>
			<View style={{ flexDirection: 'row' }}>
				<Pressable onPress={handleCollapse} style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Arrow size="small" direction={collapsed ? 'right' : 'down'} />
					<Text type="info" size={size}>
						{name} :
					</Text>
				</Pressable>
				{collapsed ? renderCollapsed() : <Text size={size}> [</Text>}
			</View>
			{!collapsed && renderNotCollapsed()}
			{!collapsed && <Text size={size}>]</Text>}
		</Styled.ObjectNode>
	);
};
