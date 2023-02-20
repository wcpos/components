import * as React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

import { useTheme } from 'styled-components/native';

type LoaderProps = {
	/** */
	type?: import('@wcpos/themes').ColorTypes;

	/** Make ActivityIndicator size compatible with Icon component */
	size?: import('@wcpos/themes').IconSizesTypes;
} & Omit<ActivityIndicatorProps, 'size'>;

/**
 *
 */
const Loader = ({ type, size = 'normal', ...props }: LoaderProps) => {
	const theme = useTheme();
	const color = theme.colors[type || 'primary'];

	return <ActivityIndicator color={color} size={theme.iconSizes[size]} {...props} />;
};

export default Loader;
