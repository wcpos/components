import * as React from 'react';
import { ViewStyle, StyleProp, ViewProps, View } from 'react-native';

import * as Styled from './styles';

type Spacing = import('@wcpos/themes').SpacingTypes;
type Rounding = import('@wcpos/themes').RoundingTypes;
type Color = import('@wcpos/themes').ColorTypes;

export interface BoxProps extends ViewProps {
	/**
	 * Children Views. */
	// children?: React.ReactNode;

	/** Padding applied on all sides. */
	padding?: Spacing;

	/** Padding applied horizontally (left & right). */
	paddingX?: Spacing;

	/** Padding applied vertically (top & bottom). */
	paddingY?: Spacing;

	/** Padding applied to top side. */
	paddingTop?: Spacing;

	/** Padding applied to bottom side. */
	paddingBottom?: Spacing;

	/** Padding applied to left side. */
	paddingLeft?: Spacing;

	/** Padding applied to right side. */
	paddingRight?: Spacing;

	/** Margin applied on all sides. */
	margin?: Spacing;

	/** Margin applied horizontally (left & right). */
	marginX?: Spacing;

	/** Margin applied vertically (top & bottom). */
	marginY?: Spacing;

	/** Margin applied to top side. */
	marginTop?: Spacing;

	/** Margin applied to bottom side. */
	marginBottom?: Spacing;

	/** Margin applied to left side. */
	marginLeft?: Spacing;

	/** Margin applied to right side. */
	marginRight?: Spacing;

	/** Rounding applied to all corners */
	rounding?: Rounding;

	/** Rounding applied to top left corner. */
	roundingTopLeft?: Rounding;

	/** Rounding applied to top right corner. */
	roundingTopRight?: Rounding;

	/** Rounding applied to bottom right corner. */
	roundingBottomRight?: Rounding;

	/** Rounding applied to bottom left corner. */
	roundingBottomLeft?: Rounding;

	/** Set to `true` to place 1px solid border on all sides. */
	border?: boolean | Color;

	/** Border applied to top side. */
	borderTop?: boolean | Color;

	/** Border applied to bottom side. */
	borderBottom?: boolean | Color;

	/** Border applied to left side. */
	borderLeft?: boolean | Color;

	/** Border applied to right side. */
	borderRight?: boolean | Color;

	/** Set to `true` to set underlying view `flex` property to `1` to fill parent view. */
	fill?: boolean;

	/** Defines a space to use between each component. */
	space?: Spacing;

	/** Set to `true` to display children components horizontally. */
	horizontal?: boolean;

	/** Defines how children views are aligned (in opposite direction of the Box). */
	align?: 'fill' | 'start' | 'end' | 'center';

	/** Defines how views are aligned (in same direction of the Box). */
	distribution?: 'start' | 'end' | 'center' | 'spaceBetween';

	/** If true, children order will be reversed. */
	reverse?: boolean;

	/** If true, a box shadow will be applied */
	raised?: boolean;

	/** If true, children will be wraped in ScrollView. */
	scrollable?: boolean;

	style?: StyleProp<ViewStyle>;
}

/**
 * Used as a basic building block to layout views. Layouting follow a flexbox like approach.
 *
 * > **Note:** Padding is applied from the more generic ones to the more specific.
 * >
 * >For example, if you apply `padding="small"` and `paddingTop="large"`, the `Box` will have a `small` padding on all sides, except top where the padding will be `large`.
 */
export const Box = React.forwardRef<View, BoxProps>(
	(
		{
			padding = 'none',
			fill = false,
			space = 'none',
			horizontal = false,
			align = 'fill',
			distribution = 'start',
			reverse = false,
			border = false,
			...rest
		},
		ref
	) => {
		const children = React.Children.toArray(rest.children).filter(Boolean);
		const childrenLength = React.Children.count(children);

		/**
		 * TODO - something weird happens in native when I use padding prop
		 * I need to investigate more
		 */
		return (
			<Styled.Box
				ref={ref}
				_padding={padding}
				fill={fill}
				space={space}
				horizontal={horizontal}
				align={align}
				distribution={distribution}
				reverse={reverse}
				border={border}
				// onKeyDownCapture={() => {
				// 	console.log('onKeyDownCapture');
				// }}
				{...rest} // TODO - fix this WARN  Node of type rule not supported as an inline style
			>
				{children}
			</Styled.Box>
		);
	}
);

// export const Box = React.forwardRef(BoxBase);
