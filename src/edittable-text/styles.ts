import styled from 'styled-components/native';
import Pressable from '../pressable';

export const BorderedPressable = styled(Pressable)`
	flex-direction: row;
	align-items: center;
	background: ${({ theme }) => theme.SEGMENT_BACKGROUND_COLOR};
	border-width: ${({ theme }) => theme.SEGMENT_BORDER_WIDTH};
	border-color: transparent;
	border-style: solid;
	border-radius: ${({ theme }) => theme.SEGMENT_BORDER_RADIUS};
	padding: ${({ theme }) => theme.SEGMENT_PADDING};
`;
