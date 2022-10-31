import styled from 'styled-components/native';
import { Text } from '../text/text';
import { Skeleton } from '../skeleton/skeleton';

type PillProps = import('./pill').PillProps;

export const Pill = styled.View<Pick<PillProps, 'disabled' | 'size' | 'color'>>`
	flex-direction: row;
	align-items: center;
	padding: ${({ theme, size }) => {
		switch (size) {
			case 'small':
				return `${theme.spacing.xxSmall}px ${theme.spacing.small}px`;
			case 'large':
				return `${theme.spacing.small}px ${theme.spacing.medium}px`;
			default:
				return `${theme.spacing.xSmall}px ${theme.spacing.small}px`;
		}
	}}
	border-radius: ${({ theme, size }) => {
		switch (size) {
			case 'small':
				return `${theme.rounding.large}px`;
			case 'large':
				return `${theme.rounding.xxLarge}px`;
			default:
				return `${theme.rounding.xLarge}px`;
		}
	}}
	background-color: ${({ theme, disabled, color }) =>
		disabled ? theme.colors.disabled : theme.colors[color]};
`;

export const Label = styled(Text)`
	color: ${({ theme }) => theme.colors.inverse};
`;

export const PillSkeleton = styled(Skeleton)<Pick<PillProps, 'size'>>`
	border-radius: ${({ theme, size }) => {
		switch (size) {
			case 'small':
				return `${theme.rounding.large}px`;
			case 'large':
				return `${theme.rounding.xxLarge}px`;
			default:
				return `${theme.rounding.xLarge}px`;
		}
	}};
`;
