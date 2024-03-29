import * as React from 'react';

import { useObservableState } from 'observable-hooks';

import { useModal } from './context';
import Box from '../box';
import Button from '../button';

/**
 *
 */
export interface ModalFooterActionProps {
	/** Label to display. */
	label: string;

	/** Action to execute on click. */
	action?: () => void;

	/** */
	type?: import('@wcpos/themes').ColorTypes;

	/** */
	loading?: boolean;

	/** */
	disabled?: boolean;
}

/**
 *
 */
export interface ModalFooterProps {
	/** */
	children?: React.ReactElement;

	/** */
	primaryAction?: ModalFooterActionProps;

	/** */
	secondaryActions?: ModalFooterActionProps[];

	/** */
	onPrimaryAction?: () => void;
}

/**
 *
 */
export const Footer = ({
	children,
	primaryActionRef,
	secondaryActionsRef,
	primaryAction$,
	secondaryActions$,
	onPrimaryAction,
}: ModalFooterProps) => {
	const primaryAction = useObservableState(primaryAction$, primaryActionRef.current);
	const secondaryActions = useObservableState(secondaryActions$, secondaryActionsRef.current);

	/**
	 * No buttons
	 */
	if (!primaryAction) {
		return null;
	}

	if (primaryAction && !secondaryActions) {
		return (
			<Box horizontal>
				<Button
					fill
					size="large"
					title={primaryAction.label}
					onPress={() => {
						if (primaryAction && primaryAction.action) {
							primaryAction.action();
						}
						onPrimaryAction && onPrimaryAction();
					}}
					type={primaryAction.type || 'primary'}
					style={{
						flex: 1,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
					}}
					loading={primaryAction.loading}
					disabled={primaryAction.disabled}
				/>
			</Box>
		);
	}

	if (primaryAction && Array.isArray(secondaryActions))
		return (
			<Box horizontal>
				{secondaryActions.map((secondaryAction, index) => (
					<Button
						key={secondaryAction.label}
						fill
						size="large"
						title={secondaryAction.label}
						onPress={secondaryAction.action}
						type={secondaryAction.type || 'secondary'}
						style={{
							flex: 1,
							borderTopLeftRadius: 0,
							borderTopRightRadius: 0,
							borderBottomRightRadius: 0,
						}}
						loading={secondaryAction.loading}
						disabled={secondaryAction.disabled}
					/>
				))}
				<Button
					fill
					size="large"
					title={primaryAction.label}
					onPress={primaryAction.action}
					type={primaryAction.type || 'primary'}
					style={{
						flex: 1,
						borderTopLeftRadius: 0,
						borderTopRightRadius: 0,
						borderBottomLeftRadius: 0,
					}}
					loading={primaryAction.loading}
					disabled={primaryAction.disabled}
				/>
			</Box>
		);

	return children ? children : null;
};
