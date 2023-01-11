import * as React from 'react';
import { ViewStyle } from 'react-native';

import * as Styled from './styles';

type ButtonProps = import('./button').Props;

export type ButtonGroupProps = {
	/**
	 * Children components (should be `Button` components).
	 */
	children: React.ReactNode;
	/**
	 * Alignment of the children.
	 *
	 * - `start` will align the buttons at the start.
	 * - `end` will align the buttons at the end.
	 */
	alignment?: 'start' | 'end' | 'center';
	/**
	 *
	 */
	fill?: boolean;
	/**
	 * Style for button group container
	 */
	style?: ViewStyle;
} & Pick<ButtonProps, 'type' | 'size' | 'background'>;

/**
 * Arrange `Button` components with consistent spacing.
 */
export const Group = ({
	alignment = 'start',
	style,
	type = 'primary',
	size = 'medium',
	background = 'solid',
	fill = false,
	...props
}: ButtonGroupProps) => {
	const children = React.Children.toArray(props.children).filter(Boolean);
	const childrenLength = React.Children.count(children);

	/**
	 *
	 */
	const items = React.Children.map(children, (child, index) => {
		let style = {
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
			borderTopLeftRadius: 0,
			borderBottomLeftRadius: 0,
			borderRightWidth: 1,
			borderRightColor: '#e0e0e0',
		};

		if (index === 0) {
			style = {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				borderRightWidth: 1,
				borderRightColor: '#e0e0e0',
			};
		}

		if (index === childrenLength - 1) {
			style = {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
			};
		}

		if (childrenLength === 1) {
			style = {};
		}

		if (fill) {
			style.flexGrow = 1;
			style.flexShrink = 0;
			style.flexBasis = `${100 / childrenLength}%`;
		}

		const newProps = { size, type, background, ...child.props, style };
		return React.cloneElement(child, newProps);
	});

	/**
	 *
	 */
	return (
		<Styled.Group alignment={alignment} style={style} fill={fill}>
			{items}
		</Styled.Group>
	);
};
