import * as React from 'react';
import { StyleProp, ViewStyle, TextProps as RNTextProps } from 'react-native';
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
	size?: 'medium' | 'large' | 'small';
	/**
	 *
	 */
	style?: StyleProp<ViewStyle>;
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
	weight?: 'normal' | 'bold' | 'light';
}

export const Text = ({
	align = 'left',
	children,
	italic,
	onPress,
	size = 'medium',
	style = {},
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
			style={style}
			type={type}
			uppercase={uppercase}
			weight={weight}
			{...props}
		>
			{typeof children === 'string' ? decode(children) : children}
		</Styled.Text>
	);
};
