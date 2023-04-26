import * as React from 'react';

import useUncontrolled from '@wcpos/hooks/src/use-uncontrolled';

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
export const Dropdown = React.forwardRef<typeof Popover, DropdownProps>(
	(
		{
			children,
			// opened,
			items,
			onSelect,
			style,
			// defaultOpened = false,
			onChange,
			renderItem,
			...props
		},
		ref
	) => {
		/**
		 *
		 */
		// const [_opened, setOpened] = useUncontrolled({
		// 	value: opened,
		// 	defaultValue: defaultOpened,
		// 	finalValue: false,
		// 	onChange,
		// });
		const [opened, setOpened] = React.useState(props.opened);

		/**
		 * when to close the popover?
		 * - close onSelect
		 * - another option is to close on blur, but how would this work in native?
		 */
		const handleSelect = (value: any) => {
			onSelect?.(value);
			setOpened(false);
			props.onClose && props.onClose();
		};

		return (
			<Popover
				opened={opened}
				onOpen={() => setOpened(true)}
				onClose={() => setOpened(false)}
				{...props}
			>
				<Popover.Target>{children}</Popover.Target>
				<Popover.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
					<ScrollView contentContainerStyle={{ maxHeight: 300 }}>
						<Menu items={items} renderItem={renderItem} onSelect={handleSelect} />
					</ScrollView>
				</Popover.Content>
			</Popover>
		);
	}
);
