import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';

import useTheme from '@wcpos/themes';

export type ImageProps = ExpoImageProps & {
	/** Image border shape */
	border?: 'square' | 'rounded' | 'circular';
};

/**
 *
 */
export const Image = ({ source, border = 'square', style, ...props }: ImageProps) => {
	const theme = useTheme();

	return (
		<ExpoImage
			source={source}
			style={[
				{ backgroundColor: '#e1e9ee' },
				{
					borderRadius:
						border === 'rounded'
							? theme.rounding.small
							: border === 'circular'
							? theme.rounding.circle
							: 0,
				},
				StyleSheet.flatten(style),
			]}
			contentFit="cover"
			transition={250}
			{...props}
		/>
	);
};
