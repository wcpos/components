import styled, { css } from 'styled-components/native';
import Icon from '../icon';
import Pressable from '../pressable';

export const PressableContainer = styled(Pressable)`
	display: flex;
	flex-direction: row;
	${({ disabled }) =>
		disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const Box = styled.View<{ checked: boolean | undefined }>`
	flex: 0 1 auto;
	align-items: center;
	justify-content: center;
	border-style: solid;
	background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : 'transparent')};
	width: ${({ theme }) => theme.font.size.medium};
	height: ${({ theme }) => theme.font.size.medium};
	border-width: ${({ theme }) => `${theme.border.thinner}px`};
	border-color: ${({ theme }) => theme.colors.border};
	border-radius: ${({ theme }) => `${theme.rounding.small}px`};
`;

export const Check = styled(Icon)`
	color: #fff;
`;

export const LabelWrapper = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 5px;
`;
