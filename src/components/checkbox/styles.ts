import styled, { css } from 'styled-components/native';
import { ThemeProps } from '../../lib/theme/types';

export const Wrapper = styled.View<{ disabled?: boolean }>`
	display: flex;
	flex-direction: row;
	${props =>
		props.disabled &&
		css`
			opacity: 0.5;
		`}
`;

export const Box = styled.View<{ theme: ThemeProps }>`
	flex: 0 1 auto;
	align-items: center;
	justify-content: center;
	border-style: solid;
	background-color: ${props => props.theme.CHECKBOX_BACKGROUND_COLOR};
	width: ${props => props.theme.CHECKBOX_WIDTH};
	height: ${props => props.theme.CHECKBOX_HEIGHT};
	border-width: ${props => props.theme.CHECKBOX_BORDER_WIDTH};
	border-color: ${props => props.theme.CHECKBOX_BORDER_COLOR};
	border-radius: ${props => props.theme.CHECKBOX_BORDER_RADIUS};
`;

export const LabelWrapper = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 0 5px;
`;

// box: {
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderStyle: 'solid',
//   backgroundColor: theme.orbit.backgroundInput,
//   borderRadius: parsePxValue(theme.orbit.borderRadiusNormal),
//   width: parsePxValue(theme.orbit.widthCheckbox),
//   height: parsePxValue(theme.orbit.heightCheckbox),
//   borderWidth: 1,
//   borderColor: theme.orbit.borderColorCheckboxRadio,
//   web: {
//     transitionDuration: theme.orbit.durationFast,
//     transitionProperty: 'all',
//     transitionTimingFunction: 'ease-in-out',
//   },
// },
// boxHover: {
//   borderWidth: 1,
//   borderColor: theme.orbit.borderColorCheckboxRadioHover,
// },
// boxFocused: {
//   borderWidth: 2,
//   borderColor: theme.orbit.borderColorCheckboxRadioFocus,
// },
// boxPressed: {
//   transform: [
//     { scaleX: theme.orbit.modifierScaleCheckboxRadioActive },
//     { scaleY: theme.orbit.modifierScaleCheckboxRadioActive },
//   ],
//   borderWidth: 1,
//   borderColor: theme.orbit.borderColorCheckboxRadioActive,
// },
// boxError: {
//   borderColor: theme.orbit.borderColorCheckboxRadioError,
// },
