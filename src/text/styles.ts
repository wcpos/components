import styled from 'styled-components/native';

type TextProps = import('./text').TextProps;

export const Text = styled.Text<TextProps>`
	color: ${({ type, theme }) => theme.colors[type] || theme.colors.text};
	font-family: ${({ theme }) => theme.font.family};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	font-weight: ${({ weight, theme }) => {
		switch (weight) {
			case 'bold':
				return theme.font.weight.bold;
			case 'light':
				return theme.font.weight.light;
			default:
				return theme.font.weight.regular;
		}
	}};
	font-size: ${({ size, theme }) => theme.font.size[size] || theme.font.size.medium};
	text-align: ${({ align }) => align || 'left'};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
