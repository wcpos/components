// credit to https://gist.github.com/nandorojo/066ff2f40419b7e06054cc7282e24f8d
// this file was repurosed from there
// via this issue https://gist.github.com/necolas/1c494e44e23eb7f8c5864a2fac66299a
// because RNW's pressable doesn't bubble events to parent pressables: https://github.com/necolas/react-native-web/issues/1875

import * as React from 'react';
import { useSharedValue, useAnimatedReaction, runOnJS } from 'react-native-reanimated';

export interface HoverableProps {
	onHoverIn?: () => void;
	onHoverOut?: () => void;
	onPressIn?: () => void;
	onPressOut?: () => void;
	children: NonNullable<React.ReactChild>;
}

export const Hoverable = ({
	onHoverIn,
	onHoverOut,
	children,
	onPressIn,
	onPressOut,
}: HoverableProps) => {
	const showHover = useSharedValue(true);
	const isHovered = useSharedValue(false);

	const hoverIn = React.useRef<undefined | (() => void)>(() => onHoverIn?.());
	const hoverOut = React.useRef<undefined | (() => void)>(() => onHoverOut?.());
	const pressIn = React.useRef<undefined | (() => void)>(() => onPressIn?.());
	const pressOut = React.useRef<undefined | (() => void)>(() => onPressOut?.());

	hoverIn.current = onHoverIn;
	hoverOut.current = onHoverOut;
	pressIn.current = onPressIn;
	pressOut.current = onPressOut;

	useAnimatedReaction(
		() => {
			return showHover.value && isHovered.value;
		},
		(hovered, previouslyHovered) => {
			if (hovered !== previouslyHovered) {
				if (hovered && hoverIn.current) {
					// no need for runOnJS, it's always web
					hoverIn.current();
				} else if (hoverOut.current) {
					hoverOut.current();
				}
			}
		},
		[]
	);

	const handleMouseEnter = React.useCallback(() => {
		if (!isHovered.value) {
			isHovered.value = true;
		}
	}, [isHovered]);

	const handleMouseLeave = React.useCallback(() => {
		if (isHovered.value) {
			isHovered.value = false;
		}
	}, [isHovered]);

	const handleGrant = React.useCallback(() => {
		showHover.value = false;
		pressIn.current?.();
	}, [showHover]);

	const handleRelease = React.useCallback(() => {
		showHover.value = true;
		pressOut.current?.();
	}, [showHover]);

	return React.cloneElement(React.Children.only(children) as any, {
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		// prevent hover showing while responder
		onResponderGrant: handleGrant,
		onResponderRelease: handleRelease,
		// if child is Touchable
		onPressIn: handleGrant,
		onPressOut: handleRelease,
	});
};
