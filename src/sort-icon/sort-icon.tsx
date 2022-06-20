import * as React from 'react';
import * as Styled from './styles';

type SortDirection = import('../table/types').SortDirection;

export interface SortIconProps {
	/**
	 *
	 */
	direction?: SortDirection;
	/**
	 *
	 */
	hovered?: boolean;
}

export const SortIcon = ({ direction, hovered = false }: SortIconProps) => {
	return (
		<Styled.Container>
			<Styled.Up active={direction === 'asc'} hovered={hovered} />
			<Styled.Down active={direction === 'desc'} hovered={hovered} />
		</Styled.Container>
	);
};
