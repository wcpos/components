import * as React from 'react';

import * as Styled from './styles';
import Text, { TextProps } from '../../text';

export interface JSONValueProps {
	name: string;
	data: any;
	originalValue: any;
	keyPath?: string[];
	deep?: number;
	isCollapsed: (keyPath: string[], deep: number, data: any) => boolean;
	onExpand: (keyPath: string[], deep: number, data: any) => void;
	size: TextProps['size'];
}

export const JSONValue = ({ name, data, keyPath = [], deep = 0, size }: JSONValueProps) => {
	return (
		<Styled.ObjectNode style={{ flexDirection: 'row' }}>
			<Text type="info" size={size}>
				{name} :{' '}
			</Text>
			<Text size={size}>{String(data)}</Text>
		</Styled.ObjectNode>
	);
};
