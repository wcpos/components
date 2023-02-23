import styled from 'styled-components/native';

type TextProps = import('./text').TextProps;

export const Text = styled.Text<TextProps>`
	color: ${({ type, theme }) => theme.colors[type] || theme.colors.text};
	font-family: ${({ theme }) => theme.font.family};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	font-weight: ${({ weight, theme }) => theme.font.weight[weight || 'normal']}};
	font-size: ${({ size, theme }) => theme.font.size[size || 'normal']};
	line-height: ${({ theme }) => theme.font.lineHeight};
	text-align: ${({ align }) => align || 'left'};
	text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`;
