import * as React from 'react';

export interface TableContextProps<T> {
	columns: import('./').ColumnProps<T>[];
	sort?: import('./').Sort;
	sortBy?: keyof T & string;
	sortDirection?: import('./').SortDirection;
}

/**
 *
 */
export const TableContext = React.createContext<TableContextProps>({
	columns: [],
	sort: undefined,
	sortBy: undefined,
	sortDirection: undefined,
});

/**
 *
 */
export const useTableContext = () => {
	if (TableContext === undefined) {
		throw new Error(`useTableContext must be called within TableContextProvider`);
	}
	return React.useContext(TableContext);
};
