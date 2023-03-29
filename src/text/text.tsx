import * as React from 'react';
import { StyleProp, TextStyle, TextProps as RNTextProps } from 'react-native';

import { decode } from 'html-entities';

import * as Styled from './styles';

export interface TextProps extends RNTextProps {
	/**
	 *
	 */
	align?: 'left' | 'right' | 'center' | 'justify';
	/**
	 *
	 */
	children: React.ReactNode;
	/**
	 *
	 */
	italic?: boolean;
	/**
	 *
	 */
	onPress?: () => void;
	/**
	 *
	 */
	size?: import('@wcpos/themes').FontSizeTypes;
	/**
	 *
	 */
	style?: StyleProp<TextStyle>;
	/**
	 *
	 */
	type?: import('@wcpos/themes').ColorTypes;
	/**
	 *
	 */
	uppercase?: boolean;
	/**
	 *
	 */
	weight?: import('@wcpos/themes').FontWeightTypes;
}

export const Text = ({
	align = 'left',
	children,
	italic,
	onPress,
	size = 'normal',
	type,
	uppercase,
	weight = 'normal',
	...props
}: TextProps) => {
	return (
		<Styled.Text
			align={align}
			italic={italic}
			onPress={onPress}
			size={size}
			type={type}
			uppercase={uppercase}
			weight={weight}
			{...props}
		>
			{typeof children === 'string' ? decode(children) : children}
		</Styled.Text>
	);
};
