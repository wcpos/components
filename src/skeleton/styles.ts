import styled, { css } from 'styled-components/native';

export const Container = styled.View<{ border: import('./skeleton').Borders }>`
	background-color: #e1e9ee;
	overflow: hidden;

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
