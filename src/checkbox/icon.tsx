import * as React from 'react';

import Icon from '../icon';
import * as Styled from './styles';

type Props = {
	checked?: boolean;
	hasError?: boolean;
	disabled?: boolean;
	focused?: boolean;
	hovered?: boolean;
	pressed?: boolean;
};

export default function CheckboxIcon({
	checked,
	hasError,
	disabled,
	focused,
	hovered,
	pressed,
}: Props) {
	const errorState = hasError && !disabled && !checked;
	const iconColor = disabled ? '#ccc' : '#FFFFFF';

	return (
		<Styled.Box checked={checked}>
			{checked && <Icon name="check" size="small" disabled={disabled} type="inverse" />}
		</Styled.Box>
	);
}
