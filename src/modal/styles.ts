import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
	${{ ...StyleSheet.absoluteFillObject }}
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: ${({ theme }) => theme.zIndex.modal};
`;
