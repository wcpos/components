import * as React from 'react';

import * as Styled from './styles';
import Text from '../text';

interface SimpleTableHeaderProps {
	columns: import('./types').Column[];
}

/**
 *
 */
const alignItemsMap = {
	left: 'start',
	center: 'center',
	right: 'end',
};

/**
 *
 */
const Header = ({ columns }: SimpleTableHeaderProps) => {
	return (
		<Styled.HeaderRow horizontal align="center">
			{columns.map((column) => {
				const { flex = 1, align = 'left', width } = column;

				return (
					<Styled.Cell
						key={column.key}
						padding="small"
						flex={flex}
						width={width}
						align={alignItemsMap[align]}
					>
						<Text uppercase size="small" type="secondary" numberOfLines={1}>
							{column.label}
						</Text>
					</Styled.Cell>
				);
			})}
		</Styled.HeaderRow>
	);
};

export default Header;
