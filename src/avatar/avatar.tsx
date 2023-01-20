import * as React from 'react';

import Image, { ImageProps } from '../image';

/**
 * Avatar properties
 */
export type AvatarProps = ImageProps & {
	/** size description */
	size?: 'default' | 'small' | 'large';
};

/**
 * Size map
 */
const map = {
	default: { width: 50, height: 50 },
	small: { width: 20, height: 20 },
	large: { width: 100, height: 100 },
};

/**
 * Avatar
 */
export const Avatar = ({ source, size = 'default', ...props }: AvatarProps) => {
	const { width, height } = map[size];

	return <Image border="circular" source={source} style={{ width, height }} />;
};
