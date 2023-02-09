import * as React from 'react';

import Box from '../box';
import Pill from '../pill';

/**
 *
 */
export type SearchFilterProps = {
	/** */
	label: string;
} & Pick<import('../pill/pill').PillProps, 'onRemove'>; // pass-through props

/**
 *
 */
interface SearchFiltersProps {
	filters: SearchFilterProps[];
}

/**
 *
 */
const SearchFilters = ({ filters }: SearchFiltersProps) => {
	return (
		<Box paddingLeft="small">
			{filters.map(({ label, onRemove }, index) => (
				<Pill key={`${label}-${index}`} removable onRemove={onRemove}>
					{label}
				</Pill>
			))}
		</Box>
	);
};

export default SearchFilters;
