import styled from 'styled-components/native';

type TextProps = import('./text').TextProps;

export const Text = styled.Text<TextProps>`
	color: ${({ type, theme }) => {
		switch (type) {
			case 'secondary':
				return theme.colors.secondary;
			case 'attention':
				return theme.colors.attention;
			case 'critical':
				return theme.colors.critical;
			case 'info':
				return theme.colors.info;
			case 'success':
				return theme.colors.success;
			case 'warning':
				return theme.colors.warning;
			case 'inverse':
				return theme.colors.inverse;
			default:
				return theme.colors.text;
		}
	}};
	font-family: ${({ theme }) => theme.FONT_FAMILY};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	font-weight: ${({ weight, theme }) => {
		switch (weight) {
			case 'bold':
				return theme.FONT_WEIGHT_BOLD;
			case 'light':
				return theme.FONT_WEIGHT_LIGHT;
			default:
				return theme.FONT_WEIGHT;
		}
	}};
	font-size: ${({ size, theme }) => {
		switch (size) {
			case 'large':
				return theme.FONT_SIZE_LARGE;
			case 'small':
				return theme.FONT_SIZE_SMALL;
			default:
				return theme.FONT_SIZE;
		}
	}};
	text-align: ${({ align }) => align || 'left'};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
