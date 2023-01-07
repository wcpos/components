import * as React from 'react';
import { View } from 'react-native';

import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import snakeCase from 'lodash/snakeCase';

import Box from '../box';
import { Item, ItemProps } from './item';

/**
 * Menu option with a Label and accessories
 */
export interface MenuOption {
	/**
	 * Menu item label.
	 */
	label: React.ReactNode;
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
 * Menu
 */
type MenuProps = {
	/**
	 * Callback called when selection is changed. Returns the value of the selected itemm. If no value is set, returns the label.
	 */
	onSelect?: (value: any) => void;
} & (
	| {
			items?: never;
			children: React.ReactNode;
	  }
	| {
			items: (MenuOption | string)[];
			children?: never;
	  }
);

/**
 *
 */
export const Menu = React.forwardRef<View, MenuProps>(
	({ children, items = [], onSelect = () => {} }, ref) => {
		/**
		 * If any item has an icon, we need to add a spacer to keep the menu item aligned
		 */
		const iconSpacer = items.some((item) => !isString(item) && !!item.icon);

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
									iconSpacer={iconSpacer}
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
