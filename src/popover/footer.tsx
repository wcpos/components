import * as React from 'react';

import { usePopover } from './context';
import Box from '../box';
import Button from '../button';

/**
 *
 */
export interface PopoverFooterActionProps {
	/** Label to display. */
	label: string;

	/** Action to execute on click. */
	action?: () => void;

	/** */
	type?: import('@wcpos/themes').ColorTypes;
}

/**
 *
 */
export interface PopoverFooterProps {
	/** */
	children?: React.ReactElement;

	/** */
	primaryAction?: PopoverFooterActionProps;

	/** */
	secondaryActions?: PopoverFooterActionProps[];

	/** */
	onPrimaryAction?: () => void;
}

/**
 *
 */
const Footer = ({ children, onPrimaryAction }: PopoverFooterProps) => {
	const { onClose, primaryAction, secondaryActions } = usePopover();

	/**
	 * No buttons
	 */
	if (!primaryAction) {
		return null;
	}

	/**
	 * One Primary Button
	 */
	if (!secondaryActions) {
		return (
			<Box horizontal>
				<Button
					fill
					size="medium"
					title={primaryAction.label}
					onPress={() => {
						if (primaryAction && primaryAction.action) {
							primaryAction.action();
						}
						onPrimaryAction && onPrimaryAction();
						onClose && onClose();
					}}
					type={primaryAction.type || 'primary'}
					style={{
						flex: 1,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
					}}
				/>
			</Box>
		);
	}

	/**
	 * Muliple Buttons
	 */
	if (Array.isArray(secondaryActions))
		return (
			<Box horizontal>
				{secondaryActions.map((secondaryAction, index) => (
					<Button
						key={secondaryAction.label}
						fill
						size="medium"
						title={secondaryAction.label}
						onPress={secondaryAction.action}
						type={secondaryAction.type || 'secondary'}
						style={{
							flex: 1,
							borderTopLeftRadius: 0,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
						}}
					/>
				))}
				<Button
					fill
					size="medium"
					title={primaryAction.label}
					onPress={primaryAction.action}
					type={primaryAction.type || 'primary'}
					style={{
						flex: 1,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
						borderBottomLeftRadius: 0,
					}}
				/>
			</Box>
		);

	return children ? children : null;
};

export default Footer;
