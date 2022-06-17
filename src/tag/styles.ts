import styled from 'styled-components/native';
import { Text } from '../text/text';
import { Skeleton } from '../skeleton/skeleton';

export const Tag = styled.View<{ disabled?: boolean }>`
	flex-direction: row;
	align-items: center;
	padding: ${({ theme }) => `${theme.spacing.xxSmall}px ${theme.spacing.small}px`};
	border-radius: ${({ theme }) => `${theme.rounding.large}px`}
	background-color: ${({ theme, disabled }) =>
		disabled ? theme.colors.disabled : theme.colors.primary};
`;

export const Label = styled(Text)`
	color: ${({ theme }) => theme.colors.inverse};
`;

export const Group = styled.View`
	flex-direction: row;
	flex-flow: wrap;
	margin-bottom: 2px;
`;

export const TagSkeleton = styled(Skeleton)`
	border-radius: ${({ theme }) => `${theme.rounding.large}px`};
`;
