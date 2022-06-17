import styled from 'styled-components/native';
import Pressable from '../pressable';

export const BorderedPressable = styled(Pressable)`
	flex-direction: row;
	align-items: center;
	background: ${({ theme }) => theme.colors.inputBackground};
	border-width: ${({ theme }) => theme.border.thinner};
	border-color: ${({ theme }) => theme.colors.border};
	border-style: solid;
	border-radius: ${({ theme }) => `${theme.rounding.small}px`};
	padding: ${({ theme }) => `${theme.spacing.small}px`};
`;
