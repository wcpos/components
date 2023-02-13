import styled from 'styled-components/native';

// export const AnimatedTriggerDuplicate = styled.View`
// 	position: absolute;
// 	z-index: ${({ theme }) => theme.POPOVER_Z_INDEX};
// `;

export const Container = styled.View`
	z-index: ${({ theme }) => theme.zIndex.popover};
	position: absolute;
`;

export const Popover = styled.View`
	background-color: ${({ theme }) => theme.colors.inputBackground};
	padding: ${({ theme }) => theme.spacing.xSmall}px;
	border-radius: ${({ theme }) => theme.rounding.small}px;
`;

export const RaisedBox = styled.View`
	shadow-offset: { width: 0, height: 1 };
	shadow-opacity: 0.22;
	shadow-radius: 7.5px;
	shadow-color: #000;
	elevation: 5;
`;
