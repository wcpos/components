import * as React from 'react';
import { View } from 'react-native';

import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import snakeCase from 'lodash/snakeCase';

import Box from '../box';
import { Item, ItemProps } from './item';

/**
 * Action with a Label and accessories
 */
export interface MenuOption {
	/**
	 * Value to return on select.
	 */
	value?: string;
	/**
	 * Action to execute on click.
	 */
	action?: ItemProps['onPress'];
	/**
	 * Color of menu item
	 */
	type?: ItemProps['type'];
	/**
	 * Label to display.
	 */
	icon?: ItemProps['icon'];
	/**
	 * Label to display.
	 */
	accessoryRight?: ItemProps['accessoryRight'];
}

/**
 * Menu can have children or use the shorthand items array.
 */
type MenuWithChildren = {
	items?: never;
	children: React.ReactNode;
};
type MenuWithItems = {
	items: (MenuOption | string)[];
	children?: never;
};

/**
 * Menu
 */
type MenuProps = {
	/**
	 *
	 */
	onSelect?: (value: any) => void;
} & (MenuWithChildren | MenuWithItems);

/**
 * Action with a Label.
 */
export const Menu = React.forwardRef<View, MenuProps>(
	({ children, items, onSelect = () => {} }, ref) => {
		return (
			<Box ref={ref}>
				{children
					? children
					: items.map((rawItem, index) => {
							const item = isString(rawItem)
								? { label: rawItem, value: rawItem, action: null }
								: rawItem;

							return (
								<Item
									key={snakeCase(`${item.label}_${index}`)}
									onPress={() => {
										if (isFunction(item.action)) {
											item.action(item.value || item.label);
										}
										isFunction(onSelect) && onSelect(item.value || item.label);
									}}
									{...item}
								>
									{item.label}
								</Item>
							);
					  })}
			</Box>
		);
	}
);
