import { ViewStyle } from 'react-native';

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
	content: { width: number; height: number; pageX: number; pageY: number },
	withinPortal: boolean = true
): {
	flexDirection?: ViewStyle['flexDirection'];
	top?: ViewStyle['top'];
	left?: ViewStyle['left'];
	right?: ViewStyle['right'];
	bottom?: ViewStyle['bottom'];
} => {
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
			? target.pageX - content.width
			: -content.width;

		if (isStartPlacement) {
			position.top = withinPortal ? target.pageY : 0;
		} else if (isEndPlacement) {
			position.top = withinPortal
				? target.pageY + target.height - content.height
				: target.height - content.height;
		} else {
			position.top = withinPortal
				? target.pageY + target.height / 2 - content.height / 2
				: target.height / 2 - content.height / 2;
		}
	}

	// vertical position
	else if (isVertical) {
		position.top = isTop(placement)
			? withinPortal
				? target.pageY - content.height
				: -content.height
			: withinPortal
			? target.pageY + target.height
			: target.height;

		if (isStartPlacement) {
			position.left = withinPortal ? target.pageX : 0;
		} else if (isEndPlacement) {
			position.left = withinPortal
				? target.pageX + target.width - content.width
				: target.width - content.width;
		} else {
			position.left = withinPortal
				? target.pageX + target.width / 2 - content.width / 2
				: target.width / 2 - content.width / 2;
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
