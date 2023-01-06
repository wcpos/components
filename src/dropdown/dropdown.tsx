import * as React from 'react';
import { ScrollView } from 'react-native';

import useFocusTrap from '@wcpos/hooks/src/use-focus-trap';

import Menu from '../menu';
import Popover, { PopoverProps } from '../popover';

type TextAction = import('../menu/menu').TextAction;

/**
 *
 */
export type DropdownProps = Omit<PopoverProps, 'content'> & {
	/**
	 *
	 */
	items: string[] | TextAction[];
	/**
	 *
	 */
	onSelect?: (value: any) => void;
};

/**
 *
 */
export const Dropdown = React.forwardRef<typeof Popover, DropdownProps>(
	({ children, items, onSelect, style, ...rest }, ref) => {
		const focusTrapRef = useFocusTrap();

		/**
		 * when to close the popover?
		 * - close onSelect
		 * - another option is to close on blur, but how would this work in native?
		 */
		const handleSelect = (value: any) => {
			onSelect?.(value);
		};

		return (
			<Popover
				ref={ref}
				content={
					<ScrollView ref={focusTrapRef} contentContainerStyle={{ maxHeight: 200 }}>
						<Menu items={items} onSelect={handleSelect} />
					</ScrollView>
				}
				placement="bottom-end"
				style={[{ paddingLeft: 0, paddingRight: 0 }, style]}
				{...rest}
			>
				{children}
			</Popover>
		);
	}
);
