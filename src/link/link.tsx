import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from 'styled-components/native';

import Pressable from '../pressable';
import Text, { TextProps } from '../text';

export interface LinkProps extends TextProps {
	children: React.ReactNode;
	onPress: () => void;
}

const Link = ({ children, onPress, ...props }: LinkProps) => {
	const theme = useTheme();

	return (
		<View style={{ flexDirection: 'row' }}>
			<Pressable onPress={onPress}>
				{({ hovered }) => (
					<Text
						style={{
							textDecorationLine: hovered ? 'underline' : 'none',
							color: theme.colors.primary,
						}}
						{...props}
					>
						{children}
					</Text>
				)}
			</Pressable>
		</View>
	);
};

export default Link;
