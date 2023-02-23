import styled, { css } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

/**
 * FIXME: TextInput doesn't seem to respect font-size and line-height on web
 */
export const TextInput = styled.TextInput`
	font-size: ${({ theme }) => theme.font.size.normal};
	line-height: ${({ theme }) => theme.font.lineHeight};
	height: ${({ theme }) => theme.font.lineHeight};
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
