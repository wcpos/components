import styled, { css } from 'styled-components/native';

export const Box = styled.View<{ checked: boolean | undefined }>`
	flex: 0 1 auto;
	align-items: center;
	justify-content: center;
	border-style: solid;
	background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : 'transparent')};
	border-width: ${({ theme }) => `${theme.border.thinner}px`};
	border-color: ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.border)};
	border-radius: ${({ theme }) => `${theme.rounding.small}px`};
`;
