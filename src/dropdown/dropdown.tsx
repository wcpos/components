import * as React from 'react';

import Menu, { MenuProps } from '../menu';
import Popover, { PopoverProps } from '../popover';
import ScrollView from '../scrollview';

/**
 *
 */
export type DropdownProps = Omit<PopoverProps, 'content' | 'children'> &
	Pick<MenuProps, 'renderItem' | 'onSelect'> & {
		/** The content which will trigger the Popover. The Popover will be anchored to this component. */
		children: React.ReactNode;

		/** Menu items are required here */
		items: NonNullable<MenuProps['items']>;
	};

/**
 *
 */
export const Dropdown = ({
	children,
	opened,
	items,
	onSelect,
	style,
	onChange,
	renderItem,
	...props
}: DropdownProps) => {
	/**
	 * when to close the popover?
	 * - close onSelect
	 * - another option is to close on blur, but how would this work in native?
	 */
	const handleSelect = (value: any) => {
		onSelect?.(value);
		props.onClose && props.onClose();
	};

	return (
		<Popover opened={opened} {...props}>
			<Popover.Target>{children}</Popover.Target>
			<Popover.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
				<ScrollView contentContainerStyle={{ maxHeight: 300 }}>
					<Menu items={items} renderItem={renderItem} onSelect={handleSelect} />
				</ScrollView>
			</Popover.Content>
		</Popover>
	);
};
