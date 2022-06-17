import * as React from 'react';
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
			{checked && <Styled.Check name="check" size="small" disabled={disabled} color="#FFF" />}
		</Styled.Box>
	);
}
