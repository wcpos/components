import * as React from 'react';

import { useTheme } from 'styled-components/native';

import * as Styled from './styles';
import Icon from '../icon';

type Props = {
	/**  */
	checked?: boolean;

	/**  */
	hasError?: boolean;

	/**  */
	disabled?: boolean;

	/**  */
	focused?: boolean;

	/**  */
	hovered?: boolean;

	/**  */
	pressed?: boolean;

	/**  */
	size: import('@wcpos/themes').FontSizeTypes;
};

export default function CheckboxIcon({
	checked,
	hasError,
	disabled,
	focused,
	hovered,
	pressed,
	size,
}: Props) {
	const theme = useTheme();
	const sizeInPx = theme.font.size[size];

	return (
		<Styled.Box checked={checked} style={{ width: sizeInPx, height: sizeInPx }}>
			{checked && (
				<Icon name="check" disabled={disabled} type="inverse" width={sizeInPx} height={sizeInPx} />
			)}
		</Styled.Box>
	);
}
