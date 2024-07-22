import * as React from 'react';
import { Pressable } from 'react-native';

import * as Styled from './styles';
import Icon from '../icon';

export interface GutterProps {
	children?: React.ReactNode;
	style?: any;
	direction?: 'horizontal' | 'vertical';
}

export const Gutter = ({ children, style, direction = 'vertical' }: GutterProps) => {
	return (
		<Pressable
			style={[
				{
					flexDirection: direction === 'vertical' ? 'row' : 'column',
					height: direction === 'vertical' ? '100%' : undefined,
					width: direction === 'horizontal' ? '100%' : undefined,
				},
				style,
			]}
		>
			{({
				// @ts-ignore
				hovered,
			}) => (
				<Styled.View
					hovered={hovered}
					style={{
						height: direction === 'vertical' ? '100%' : '12px',
						width: direction === 'horizontal' ? '100%' : '12px',
					}}
				>
					{children || (
						<Icon
							name={direction === 'horizontal' ? 'gripLines' : 'gripLinesVertical'}
							size="xSmall"
							type={hovered ? 'primary' : 'secondary'}
						/>
					)}
				</Styled.View>
			)}
		</Pressable>
	);
};
