import styled, { css } from 'styled-components/native';
import Platform from '@wcpos/utils/src/platform';
import Pressable from '../pressable';
import { Text } from '../text/styles';

export const InputAndAccessoryContainer = styled(Pressable)`
	flex-direction: row;
	align-items: center;
	background: ${({ theme }) => theme.colors.inputBackground};
	border-width: ${({ theme }) => theme.border.thinner};
	border-color: ${({ theme }) => theme.colors.border};
	border-style: solid;
	border-radius: ${({ theme }) => `${theme.rounding.small}px`};
	padding: ${({ theme }) => `${theme.spacing.small}px`};

	${Platform.OS === 'ios' &&
	css`
		height: 30px;
	`}
`;

export const InputText = styled(Text)`
	flex: 1;
`;
