import React from 'react';
import * as Styled from './styles';

type Spacing = import('@wcpos/themes').SpacingTypes;

export interface SpaceProps {
	/**
	 * Spacing value.
	 */
	value: Spacing;
}

/**
 * Used to add spacing between components.
 */
export const Space = ({ value = 'medium' }: SpaceProps) => {
	return <Styled.Space value={value} />;
};
