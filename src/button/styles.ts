import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { math } from 'polished';

type ButtonProps = import('./button').Props;
type BackgroundProps = Pick<ButtonProps, 'background' | 'type' | 'disabled' | 'size' | 'fill'>;

export const Background = styled.View<BackgroundProps>`
	background-color: ${({ background, type, theme }) => {
		if (background === 'clear' || background === 'outline') {
			return 'transparent';
		}
		switch (type) {
			case 'secondary':
				return theme.BUTTON_COLOR_SECONDARY;
			case 'attention':
				return theme.BUTTON_COLOR_ATTENTION;
			case 'critical':
				return theme.BUTTON_COLOR_CRITICAL;
			case 'info':
				return theme.BUTTON_COLOR_INFO;
			case 'success':
				return theme.BUTTON_COLOR_SUCCESS;
			case 'warning':
				return theme.BUTTON_COLOR_WARNING;
			case 'inverse':
				return theme.BUTTON_COLOR_INVERSE;
			default:
				return theme.BUTTON_COLOR;
		}
	}};

	border-color: ${({ type, theme }) => {
		switch (type) {
			case 'secondary':
				return theme.BUTTON_COLOR_SECONDARY;
			case 'attention':
				return theme.BUTTON_COLOR_ATTENTION;
			case 'critical':
				return theme.BUTTON_COLOR_CRITICAL;
			case 'info':
				return theme.BUTTON_COLOR_INFO;
			case 'success':
				return theme.BUTTON_COLOR_SUCCESS;
			case 'warning':
				return theme.BUTTON_COLOR_WARNING;
			case 'inverse':
				return theme.BUTTON_COLOR_INVERSE;
			default:
				return theme.BUTTON_COLOR;
		}
	}};

	opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}
	border-radius: ${({ theme }) => theme.BUTTON_BORDER_RADIUS};
	border-width: ${({ background }) =>
		background === 'outline' ? `${StyleSheet.hairlineWidth}px` : 0};
	
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-grow: ${({ fill }) => (fill ? 1 : 0)};
	height: ${({ fill }) => (fill ? '100%' : 'auto')};
`;

type ButtonGroupProps = import('./group').ButtonGroupProps;

export const Group = styled.View<ButtonGroupProps>`
	flex-direction: row;
	justify-content: ${({ alignment }) => {
		switch (alignment) {
			case 'start':
				return 'flex-start';
			case 'end':
				return 'flex-end';
			default:
				return 'center';
		}
	}};
`;

export const GroupChild = styled.View<ButtonGroupProps & { last: boolean }>`
	margin-end: ${({ last, theme }) => (last ? '0' : theme.BUTTONGROUP_SPACING)};
	flex: ${({ alignment }) => (alignment === 'full' ? '1 1 auto' : 0)};
`;