import styled, { css } from 'styled-components/native';

import { Skeleton } from '../skeleton/skeleton';

type Props = Pick<import('./image').ImageProps, 'border'>;

export const Container = styled.View`
	position: relative;
	overflow: hidden;
`;

export const Image = styled.Image<Props>`
	width: 100%;
	height: 100%;

	/** Border */
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

export const ImageSkeleton = styled(Skeleton)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
