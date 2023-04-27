import { ViewStyle, Dimensions } from 'react-native';

import { MeasuredDimensions } from 'react-native-reanimated';

/**
 * Determines placement of the `Popover`.
 */
export type PopoverPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-start'
	| 'right-end';

const PLACEMENTS = {
	top: ['top', 'top-start', 'top-end'],
	bottom: ['bottom', 'bottom-start', 'bottom-end'],
	left: ['left', 'left-start', 'left-end'],
	right: ['right', 'right-start', 'right-end'],
	start: ['top-start', 'bottom-start', 'left-start', 'right-start'],
	end: ['top-end', 'bottom-end', 'left-end', 'right-end'],
};

export const isTop = (placement: PopoverPlacement): placement is 'top' | 'top-start' | 'top-end' =>
	PLACEMENTS.top.indexOf(placement) >= 0;

export const isBottom = (
	placement: PopoverPlacement
): placement is 'bottom' | 'bottom-start' | 'bottom-end' =>
	PLACEMENTS.bottom.indexOf(placement) >= 0;

export const isLeft = (
	placement: PopoverPlacement
): placement is 'left' | 'left-start' | 'left-end' => PLACEMENTS.left.indexOf(placement) >= 0;

export const isRight = (
	placement: PopoverPlacement
): placement is 'right' | 'right-start' | 'right-end' => PLACEMENTS.right.indexOf(placement) >= 0;

export const isStart = (
	placement: PopoverPlacement
): placement is 'top-start' | 'bottom-start' | 'left-start' | 'right-start' =>
	PLACEMENTS.start.indexOf(placement) >= 0;

export const isEnd = (
	placement: PopoverPlacement
): placement is 'top-end' | 'bottom-end' | 'left-end' | 'right-end' =>
	PLACEMENTS.end.indexOf(placement) >= 0;

/**
 * Map container alignment to `PopoverPlacement`, eg: center/start/end.
 */
export const getContainerAlign = (
	placement: PopoverPlacement
): {
	alignItems: ViewStyle['alignItems'];
	justifyContent: ViewStyle['justifyContent'];
} => {
	if (isStart(placement)) return { alignItems: 'flex-start', justifyContent: 'flex-start' };
	if (isEnd(placement)) return { alignItems: 'flex-end', justifyContent: 'flex-end' };
	return { alignItems: 'center', justifyContent: 'center' };
};

/**
 * Map popover to `PopoverPlacement`, top, bottom, left or right of the target
 * if withinPortal is false, the popover will be positioned relative to the target
 * if withinPortal is true, the popover will be positioned relative to the page
 */
export const getPopoverPosition = (
	placement: PopoverPlacement,
	target: { width: number; height: number; pageX: number; pageY: number },
	contentWidth: number,
	contentHeight: number,
	withinPortal: boolean = true
) => {
	const position: {
		flexDirection?: ViewStyle['flexDirection'];
		top?: ViewStyle['top'];
		left?: ViewStyle['left'];
		right?: ViewStyle['right'];
		bottom?: ViewStyle['bottom'];
	} = {};

	const isHorizontal = isRight(placement) || isLeft(placement);
	const isVertical = isTop(placement) || isBottom(placement);
	const isStartPlacement = isStart(placement);
	const isEndPlacement = isEnd(placement);

	// horizontal position
	if (isHorizontal) {
		position.flexDirection = 'row';
		position.left = isRight(placement)
			? withinPortal
				? target.pageX + target.width
				: target.width
			: withinPortal
			? target.pageX - contentWidth
			: -contentWidth;

		if (isStartPlacement) {
			position.top = withinPortal ? target.pageY : 0;
		} else if (isEndPlacement) {
			position.top = withinPortal
				? target.pageY + target.height - contentHeight
				: target.height - contentHeight;
		} else {
			position.top = withinPortal
				? target.pageY + target.height / 2 - contentHeight / 2
				: target.height / 2 - contentHeight / 2;
		}
	}

	// vertical position
	else if (isVertical) {
		position.top = isTop(placement)
			? withinPortal
				? target.pageY - contentHeight
				: -contentHeight
			: withinPortal
			? target.pageY + target.height
			: target.height;

		if (isStartPlacement) {
			position.left = withinPortal ? target.pageX : 0;
		} else if (isEndPlacement) {
			position.left = withinPortal
				? target.pageX + target.width - contentWidth
				: target.width - contentWidth;
		} else {
			position.left = withinPortal
				? target.pageX + target.width / 2 - contentWidth / 2
				: target.width / 2 - contentWidth / 2;
		}
	}

	return position;
};

/**
 * Map arrow direction to `PopoverPlacement`, points towards the target.
 */
export const getArrowDirection = (placement: PopoverPlacement) => {
	if (isTop(placement)) return 'down';
	if (isLeft(placement)) return 'right';
	if (isRight(placement)) return 'left';
	return 'up';
};

/**
 * Map arrow alignment to `PopoverPlacement`, eg: center/start/end.
 */
export const getArrowAlign = (
	placement: PopoverPlacement
): {
	alignSelf: ViewStyle['alignSelf'];
	paddingTop?: ViewStyle['paddingTop'];
	paddingBottom?: ViewStyle['paddingBottom'];
	paddingLeft?: ViewStyle['paddingLeft'];
	paddingRight?: ViewStyle['paddingRight'];
} => {
	if (isStart(placement))
		return {
			alignSelf: 'flex-start',
			paddingTop: isLeft(placement) || isRight(placement) ? 10 : 0,
			paddingLeft: isTop(placement) || isBottom(placement) ? 10 : 0,
		};
	if (isEnd(placement))
		return {
			alignSelf: 'flex-end',
			paddingBottom: isLeft(placement) || isRight(placement) ? 10 : 0,
			paddingRight: isTop(placement) || isBottom(placement) ? 10 : 0,
		};
	return { alignSelf: 'center' };
};

interface EventData {
	absoluteX: number;
	absoluteY: number;
	x: number;
	y: number;
}

/**
 *
 */
export function isPressInsideElement(event: EventData, element: MeasuredDimensions): boolean {
	const leftBound = element.pageX;
	const rightBound = element.pageX + element.width;
	const topBound = element.pageY;
	const bottomBound = element.pageY + element.height;

	return (
		event.absoluteX >= leftBound &&
		event.absoluteX <= rightBound &&
		event.absoluteY >= topBound &&
		event.absoluteY <= bottomBound
	);
}

/**
 * Check if the calculated position is off-screen and adjust the placement accordingly
 */
export const adjustPlacement = (
	placement: PopoverPlacement,
	position: ReturnType<typeof getPopoverPosition>,
	targetMeasurements: MeasuredDimensions,
	contentWidth: number,
	contentHeight: number,
	withinPortal: boolean,
	depth: number = 0
): PopoverPlacement => {
	if (depth > 3) {
		// Maximum depth reached, stop adjusting the placement to avoid infinite recursion
		return placement;
	}

	const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
	const { top, left } = position;

	let adjustedPlacement = placement;

	if (withinPortal) {
		if (isTop(placement) && top < 0) {
			adjustedPlacement =
				'bottom' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isBottom(placement) && top + contentHeight > windowHeight) {
			adjustedPlacement = 'top' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isLeft(placement) && left < 0) {
			adjustedPlacement =
				'right' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isRight(placement) && left + contentWidth > windowWidth) {
			adjustedPlacement = 'left' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		}
	} else {
		if (isTop(placement) && top < -targetMeasurements.height) {
			adjustedPlacement =
				'bottom' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isBottom(placement) && top + contentHeight > targetMeasurements.height) {
			adjustedPlacement = 'top' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isLeft(placement) && left < -targetMeasurements.width) {
			adjustedPlacement =
				'right' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		} else if (isRight(placement) && left + contentWidth > targetMeasurements.width) {
			adjustedPlacement = 'left' + (isStart(placement) ? '-start' : isEnd(placement) ? '-end' : '');
		}
	}

	if (adjustedPlacement !== placement) {
		const newPosition = getPopoverPosition(
			adjustedPlacement,
			targetMeasurements,
			contentWidth,
			contentHeight,
			withinPortal
		);

		return adjustPlacement(
			adjustedPlacement,
			newPosition,
			targetMeasurements,
			contentWidth,
			contentHeight,
			withinPortal,
			depth + 1
		);
	}

	return placement;
};
