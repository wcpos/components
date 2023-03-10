import styled, { css } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

/**
 * FIXME: TextInput doesn't seem to respect font-size and line-height on web
 */
export const TextInput = styled.TextInput`
	font-family: ${({ theme }) => theme.font.family};
	font-size: ${({ theme }) => theme.font.size.normal};
	line-height: ${({ theme }) => theme.font.size.normal};
	height: ${({ theme }) => theme.font.size.normal};
	padding: 0;
	margin: 0;

	${
		Platform.OS !== 'ios' &&
		Platform.OS !== 'android' &&
		css`
			outline-width: 0;
		`
	}}
`;
