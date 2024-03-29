import * as React from 'react';
import { StyleProp, TextStyle, TextProps as RNTextProps } from 'react-native';

import { decode } from 'html-entities';
import { useTheme } from 'styled-components/native';

import * as Styled from './styles';

export interface TextProps extends RNTextProps {
	/** */
	align?: 'left' | 'right' | 'center' | 'justify';

	/** */
	children: React.ReactNode;

	/** */
	italic?: boolean;

	/** */
	onPress?: () => void;

	/** */
	size?: import('@wcpos/themes').FontSizeTypes;

	/** */
	style?: StyleProp<TextStyle>;

	/** */
	type?: import('@wcpos/themes').ColorTypes;

	/** */
	backgroundType?: import('@wcpos/themes').ColorTypes;

	/** */
	uppercase?: boolean;

	/** */
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
	backgroundType,
	...props
}: TextProps) => {
	const theme = useTheme();
	const adjustedType =
		type === 'inverse' && backgroundType ? theme.inverseColors[backgroundType] : type;

	/**
	 * @TODO - do I really need to decode all values, perhaps better to have as an option for WC REST API output
	 */
	const decodedChildren = React.Children.map(children, (child) =>
		typeof child === 'string' ? decode(child) : child
	);

	return (
		<Styled.Text
			align={align}
			italic={italic}
			onPress={onPress}
			size={size}
			type={adjustedType}
			uppercase={uppercase}
			weight={weight}
			{...props}
		>
			{decodedChildren}
		</Styled.Text>
	);
};
