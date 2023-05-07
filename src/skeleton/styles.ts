import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ border: import('./skeleton').Borders }>`
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.darkGrey};

	${({ border, theme }) => {
		switch (border) {
			case 'rounded':
				return css`
					border-radius: ${theme.rounding.small}px;
				`;
			case 'circular':
				return css`
					border-radius: ${theme.rounding.circle}px;
				`;
			default:
				return css`
					border-radius: ${theme.rounding.none}px;
				`;
		}
	}}
`;
