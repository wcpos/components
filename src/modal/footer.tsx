import * as React from 'react';

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
}

/**
 *
 */
export const Footer = ({ children, primaryAction, secondaryActions }: ModalFooterProps) => {
	if (primaryAction && !secondaryActions) {
		return (
			<Box horizontal>
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
					}}
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
				/>
			</Box>
		);

	return children ? children : null;
};
