import styled from 'styled-components/native';
import Box, { BoxProps } from '../box';

export const Table = styled.View`
	width: 100%;
	height: 100%;
`;

export const Row = styled(Box)<BoxProps & { alt: boolean }>`
	border-bottom-width: 1px;
	border-style: solid;
	border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
	background-color: ${({ alt, theme }) => (alt ? 'transparent' : theme.colors.lightestGrey)};
`;

export const Cell = styled.View`
	padding: 5px;
	align-items: flex-start;
`;

export const HeaderRow = styled(Box)`
	border-bottom-width: 2px;
	border-style: solid;
	border-bottom-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const HeaderCell = styled.View`
	padding: 5px;
`;

export const HeaderTextWrapper = styled.View`
	flex-direction: row;
	align-items: center;
`;
