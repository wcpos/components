import styled, { css } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

type TextInputProps = import('./textinput').TextInputProps;

/**
 *
 */
export const TextInput = styled.TextInput<TextInputProps>`
	font-family: ${({ theme }) => theme.font.family};
	font-size: ${({ theme, size }) => theme.font.size[size]};
	line-height: ${({ theme, size }) => theme.font.lineHeight[size]};
	padding: 0;
	margin: 0;

	${Platform.OS !== 'ios' &&
	Platform.OS !== 'android' &&
	css`
		outline-width: 0;
		outline-style: none;
		outline-color: transparent;
		::-moz-focus-inner {
			border: 0;
		}
	`}
`;
