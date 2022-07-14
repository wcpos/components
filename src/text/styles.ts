import styled from 'styled-components/native';

type TextProps = import('./text').TextProps;

export const Text = styled.Text<TextProps>`
	color: ${
		({ type, theme }) => theme.colors[type] || theme.colors.text
		// switch (type) {
		// 	case 'primary':
		// 		return theme.colors.primary;
		// 	case 'secondary':
		// 		return theme.colors.secondary;
		// 	case 'attention':
		// 		return theme.colors.attention;
		// 	case 'critical':
		// 		return theme.colors.critical;
		// 	case 'info':
		// 		return theme.colors.info;
		// 	case 'success':
		// 		return theme.colors.success;
		// 	case 'warning':
		// 		return theme.colors.warning;
		// 	case 'inverse':
		// 		return theme.colors.inverse;
		// 	default:
		// 		return theme.colors.text;
		// }
	};
	font-family: ${({ theme }) => theme.font.family};
	// font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
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
	font-size: ${({ size, theme }) => {
		switch (size) {
			case 'large':
				return theme.font.size.large;
			case 'small':
				return theme.font.size.small;
			default:
				return theme.font.size.medium;
		}
	}};
	text-align: ${({ align }) => align || 'left'};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
