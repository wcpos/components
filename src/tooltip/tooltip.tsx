import * as React from 'react';

// import Platform from '@wcpos/utils/src/platform';
import Popover, { PopoverProps } from '../popover';
import Text from '../text';

export type TooltipProps = Omit<PopoverProps, 'content' | 'children'> & {
	/**
	 * The content which will trigger the Popover. The Popover will be anchored to this component.
	 */
	children: React.ReactNode;
	/**
	 * The content to display inside the Popover.
	 */
	content: React.ReactNode;
};

/**
 * Tooltip is a special type of Popover
 * TODO - set timeout for native tooltips, need onOpen or similar
 */
export const Tooltip = ({ children, placement = 'top', ...props }: TooltipProps) => {
	// const ref = React.useRef<typeof Popover>(null);
	// useTimeout(() => {
	// 	if (Platform.isNative) {
	// 		ref.current?.close();
	// 	}
	// }, 2500);

	const content =
		typeof props.content === 'string' ? <Text type="inverse">{props.content}</Text> : props.content;

	return (
		<Popover
			// ref={ref}
			placement={placement}
			trigger="hover"
			style={{ backgroundColor: 'black' }}
			withinPortal
			{...props}
		>
			<Popover.Target>{children}</Popover.Target>
			<Popover.Content style={{ backgroundColor: 'black' }}>{content}</Popover.Content>
		</Popover>
	);
};
