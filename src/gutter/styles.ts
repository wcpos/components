import styled, { css } from 'styled-components/native';

import Platform from '@wcpos/utils/src/platform';

export const View = styled.View<{ hovered: boolean }>`
	align-items: center;
	justify-content: center;
	background-color: ${({ hovered }) => (hovered ? 'rgba(0,0,0,0.05)' : 'transparent')};

	${Platform.OS !== 'ios' &&
	Platform.OS !== 'android' &&
	css`
		cursor: col-resize;
	`}
`;
