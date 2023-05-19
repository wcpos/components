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
const Image = ({ source, border = 'square', style, ...props }: ImageProps) => {
	const theme = useTheme();

	return (
		<ExpoImage
			source={source}
			style={[
				{ backgroundColor: theme.colors.bodyBackground },
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

/**
 * memoizing does not fix flashing transition
 */
// export default React.memo(Image);
export default Image;
