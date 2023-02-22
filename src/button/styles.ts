import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

type ButtonProps = import('./button').Props;
type BackgroundProps = Pick<ButtonProps, 'background' | 'type' | 'disabled' | 'size' | 'fill'>;

export const Background = styled.View<BackgroundProps>`
	background-color: ${({ background, type, theme }) => {
		if (background === 'clear' || background === 'outline') {
			return 'transparent';
		}
		return type ? theme.colors[type] : theme.colors.primary;
	}}};

	border-color: ${({ type, theme }) => {
		return type ? theme.colors[type] : theme.colors.primary;
	}};

	opacity: ${({ disabled }) => (disabled ? 0.75 : 1)}
	border-radius: ${({ theme }) => `${theme.rounding.medium}px`};
	border-width: ${({ background }) =>
		background === 'outline' ? `${StyleSheet.hairlineWidth}px` : 0};
	
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-grow: ${({ fill }) => (fill ? 1 : 0)};
	height: ${({ fill }) => (fill ? '100%' : 'auto')};

	padding: ${({ size, theme }) => {
		if (size === 'small') {
			return `${theme.spacing.xxSmall}px ${theme.spacing.xSmall}px`;
		}
		if (size === 'large') {
			return `${theme.spacing.small}px ${theme.spacing.medium}px`;
		}
		return `${theme.spacing.xSmall}px ${theme.spacing.small}px`;
	}};
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
	width: ${({ fill }) => (fill ? '100%' : 'auto')};
`;

export const GroupChild = styled.View<ButtonGroupProps & { last: boolean }>`
	margin-end: ${({ last, theme }) => (last ? '0' : theme.spacing.small)};
`;
