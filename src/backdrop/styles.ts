import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Backdrop = styled.View`
	background-color: rgba(0, 0, 0, 0.3);
	${{ ...StyleSheet.absoluteFillObject }}
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zIndex.backdrop};
`;
