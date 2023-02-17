import * as React from 'react';
import { Pressable } from 'react-native';

import { useTheme } from 'styled-components/native';

import Box from '../box';
import {
	triangleExclamation as AlertIcon,
	xmark as XIcon,
} from '../icon/components/fontawesome/solid';
import Text from '../text';

import type { FallbackProps } from 'react-error-boundary';

/**
 * TODO - convert this to a general removable message component
 */
const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => {
	const theme = useTheme();

	return (
		<Box
			horizontal
			space="small"
			padding="small"
			style={{ backgroundColor: theme.colors.critical }}
		>
			<Box>
				<AlertIcon
					width={theme.iconSizes.xLarge}
					height={theme.iconSizes.xLarge}
					fill={theme.colors.inverse}
				/>
			</Box>
			<Box fill>
				<Text type="inverse" weight="bold">
					Something went wrong:
				</Text>
				<Text type="inverse">{error.message}</Text>
			</Box>
			<Box>
				<Pressable onPress={resetErrorBoundary}>
					<XIcon
						width={theme.iconSizes.normal}
						height={theme.iconSizes.normal}
						fill={theme.colors.inverse}
					/>
				</Pressable>
			</Box>
		</Box>
	);
};

export default Fallback;
