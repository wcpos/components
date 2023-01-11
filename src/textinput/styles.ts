import styled, { css } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

export const TextInput = styled.TextInput`
	font-size: ${({ theme }) => theme.font.size.normal};
	padding: 0;

	${
		Platform.OS !== 'ios' &&
		Platform.OS !== 'android' &&
		css`
			outline-width: 0;
		`
	}}
`;
