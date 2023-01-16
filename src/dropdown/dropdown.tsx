import * as React from 'react';

import useUncontrolled from '@wcpos/hooks/src/use-uncontrolled';

import Menu from '../menu';
import Popover, { PopoverProps } from '../popover';
import ScrollView from '../scrollview';

type MenuOption = import('../menu/menu').MenuOption;

/**
 *
 */
export type DropdownProps = Omit<PopoverProps, 'content'> & {
	/** */
	items: string[] | MenuOption[];

	/** */
	onSelect?: (value: any) => void;

	/** Controlled menu opened state */
	opened?: boolean;

	/** Uncontrolled menu initial opened state */
	defaultOpened?: boolean;

	/** Called when menu opened state changes */
	onChange?(opened: boolean): void;

	/** Called when Menu is opened */
	onOpen?(): void;

	/** Called when Menu is closed */
	onClose?(): void;
};

/**
 *
 */
export const Dropdown = React.forwardRef<typeof Popover, DropdownProps>(
	(
		{ children, opened, items, onSelect, style, defaultOpened = false, onChange, ...props },
		ref
	) => {
		/**
		 *
		 */
		const [_opened, setOpened] = useUncontrolled({
			value: opened,
			defaultValue: defaultOpened,
			finalValue: false,
			onChange,
		});

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
				opened={_opened}
				onOpen={() => {
					setOpened(true);
				}}
				onClose={() => {
					setOpened(false);
				}}
				{...props}
			>
				<Popover.Target>{children}</Popover.Target>
				<Popover.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
					<ScrollView contentContainerStyle={{ maxHeight: 200 }}>
						<Menu items={items} onSelect={handleSelect} />
					</ScrollView>
				</Popover.Content>
			</Popover>
		);
	}
);
