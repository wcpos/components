import * as React from 'react';

import Text from '../../text';
import * as Styled from './styles';

export interface JSONValueProps {
	name: string;
	data: any;
	originalValue: any;
	keyPath?: string[];
	deep?: number;
	isCollapsed: (keyPath: string[], deep: number, data: any) => boolean;
	onExpand: (keyPath: string[], deep: number, data: any) => void;
}

export const JSONValue = ({ name, data, keyPath = [], deep = 0 }: JSONValueProps) => {
	return (
		<Styled.ObjectNode style={{ flexDirection: 'row' }}>
			<Text type="info">{name} : </Text>
			<Text>{String(data)}</Text>
		</Styled.ObjectNode>
	);
};
