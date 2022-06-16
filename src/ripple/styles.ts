import styled from 'styled-components/native';

export const RippleEffect = styled.View`
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: ${({ theme }) => theme.rounding.circle};
	background-color: rgba(0, 0, 0, 0.1);
`;
