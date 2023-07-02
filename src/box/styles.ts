import styled, { css } from 'styled-components/native';

type BoxProps = import('./box').BoxProps;

export const Box = styled.View<BoxProps>`
	padding-top: ${({ theme, paddingTop, paddingY, _padding }) =>
		`${theme.spacing[paddingTop || paddingY || _padding || 'none']}px`};
	padding-bottom: ${({ theme, paddingBottom, paddingY, _padding }) =>
		`${theme.spacing[paddingBottom || paddingY || _padding || 'none']}px`};
	padding-left: ${({ theme, paddingLeft, paddingX, _padding }) =>
		`${theme.spacing[paddingLeft || paddingX || _padding || 'none']}px`};
	padding-right: ${({ theme, paddingRight, paddingX, _padding }) =>
		`${theme.spacing[paddingRight || paddingX || _padding || 'none']}px`};

	margin-top: ${({ theme, marginTop, marginY, _margin }) =>
		`${theme.spacing[marginTop || marginY || _margin || 'none']}px`};
	margin-bottom: ${({ theme, marginBottom, marginY, _margin }) =>
		`${theme.spacing[marginBottom || marginY || _margin || 'none']}px`};
	margin-left: ${({ theme, marginLeft, marginX, _margin }) =>
		`${theme.spacing[marginLeft || marginX || _margin || 'none']}px`};
	margin-right: ${({ theme, marginRight, marginX, _margin }) =>
		`${theme.spacing[marginRight || marginX || _margin || 'none']}px`};

	flex-direction: ${({ reverse, horizontal }) =>
		reverse ? (horizontal ? 'row-reverse' : 'column-reverse') : horizontal ? 'row' : 'column'};

	${({ fill }) =>
		fill &&
		css`
			flex: 1;
		`}

	gap: ${({ theme, space }) => `${theme.spacing[space]}px`};

	justify-content: ${({ distribution }) =>
		distribution === 'start'
			? 'flex-start'
			: distribution === 'end'
			? 'flex-end'
			: distribution === 'center'
			? 'center'
			: 'space-between'};

	align-items: ${({ align }) =>
		align === 'fill'
			? 'stretch'
			: align === 'start'
			? 'flex-start'
			: align === 'end'
			? 'flex-end'
			: 'center'};

	${({ raised }) =>
		raised &&
		css`
			shadow-offset: {
				width: 0;
				height: 1;
			}
			shadow-opacity: 0.22;
			shadow-radius: 7.5px;
			shadow-color: #000;
			elevation: 5;
		`}

	border-top-left-radius: ${({ theme, roundingTopLeft, rounding }) =>
		`${theme.rounding[roundingTopLeft || rounding || 'none']}px`};
	border-top-right-radius: ${({ theme, roundingTopRight, rounding }) =>
		`${theme.rounding[roundingTopRight || rounding || 'none']}px`};
	border-bottom-right-radius: ${({ theme, roundingBottomRight, rounding }) =>
		`${theme.rounding[roundingBottomRight || rounding || 'none']}px`};
	border-bottom-left-radius: ${({ theme, roundingBottomLeft, rounding }) =>
		`${theme.rounding[roundingBottomLeft || rounding || 'none']}px`};

	border-top-width: ${({ borderTop, border }) => (borderTop || border ? '1px' : 0)};
	border-right-width: ${({ borderRight, border }) => (borderRight || border ? '1px' : 0)};
	border-bottom-width: ${({ borderBottom, border }) => (borderBottom || border ? '1px' : 0)};
	border-left-width: ${({ borderLeft, border }) => (borderLeft || border ? '1px' : 0)};
	border-color: ${({ theme, border, borderTop, borderRight, borderBottom, borderLeft }) =>
		theme.colors[border || borderTop || borderRight || borderBottom || borderLeft] ||
		theme.colors.border};
	border-style: solid;
`;
