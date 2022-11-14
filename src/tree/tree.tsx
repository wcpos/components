import * as React from 'react';

import Box from '../box';
import Button from '../button';
import Icon from '../icon';
import { Raw } from './raw';
import registry from './registry';
import * as Styled from './styles';

export interface TreeProps {
	data: any;
	rootName?: string;
	isCollapsed?: (keyPath: string[], deep: number, data: any) => boolean;
	onExpand?: (keyPath: string[], deep: number, data: any) => void;
	fallback?: React.ReactNode;
}

export const Tree = ({
	data,
	rootName = 'root',
	isCollapsed,
	onExpand,
	fallback = null,
}: TreeProps) => {
	const [raw, setRaw] = React.useState(false);
	const JSONNode = registry.node;

	return (
		<Box paddingY="small">
			{raw ? (
				<Raw data={data} />
			) : (
				<JSONNode
					data={data}
					name={rootName}
					deep={-1}
					isCollapsed={isCollapsed}
					onExpand={onExpand}
					registry={registry}
				/>
			)}
			<Styled.RawButtonContainer>
				<Button
					title="raw"
					type="secondary"
					background="outline"
					size="small"
					onPress={() => setRaw(!raw)}
					accessoryLeft={
						raw ? <Icon size="small" name="eyeSlash" /> : <Icon size="small" name="eye" />
					}
				/>
			</Styled.RawButtonContainer>
		</Box>
	);
};
