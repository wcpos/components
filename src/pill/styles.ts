import styled from 'styled-components/native';

import { Skeleton } from '../skeleton/skeleton';
import { Text } from '../text/text';

type PillProps = import('./pill').PillProps;

export const Pill = styled.View<Pick<PillProps, 'disabled' | 'size' | 'color'>>`
	flex-direction: row;
	align-items: center;
	padding: ${({ theme, size }) => {
		switch (size) {
			case 'xSmall':
				return `${theme.spacing.xxSmall}px ${theme.spacing.xSmall}px`;
			case 'small':
				return `${theme.spacing.xSmall}px ${theme.spacing.small}px`;
			case 'large':
			case 'xLarge':
				return `${theme.spacing.small}px ${theme.spacing.medium}px`;
			default:
				return `${theme.spacing.xSmall}px ${theme.spacing.small}px`;
		}
	}};
	border-radius: ${({ theme, size }) => {
		switch (size) {
			case 'xSmall':
			case 'small':
				return `${theme.rounding.xLarge}px`;
			case 'large':
			case 'xLarge':
				return `${theme.rounding.xxLarge}px`;
			default:
				return `${theme.rounding.xLarge}px`;
		}
	}};
	background-color: ${({ theme, disabled, color }) =>
		disabled ? theme.colors.disabled : theme.colors[color]};
	gap: ${({ theme, size }) => `${theme.spacing.xSmall}px`};
	max-width: 100%;
`;

export const Label = styled(Text)`
	color: ${({ theme }) => theme.colors.inverse};
`;

export const PillSkeleton = styled(Skeleton)<Pick<PillProps, 'size'>>`
	border-radius: ${({ theme, size }) => {
		switch (size) {
			case 'xSmall':
			case 'small':
				return `${theme.rounding.large}px`;
			case 'large':
			case 'xLarge':
				return `${theme.rounding.xxLarge}px`;
			default:
				return `${theme.rounding.xLarge}px`;
		}
	}};
`;
