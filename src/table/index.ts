import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import Table from './table';
import Row from './row';

export type { TableProps } from './table';
export type { TableContextProps } from './context';

export type SortDirection = 'asc' | 'desc';

export interface SortProps {
	defaultSortDirection?: SortDirection;
	event: NativeSyntheticEvent<NativeTouchEvent>;
	sortBy: string | number;
	sortDirection?: SortDirection;
}

export type Sort = (props: SortProps) => void;

export interface ColumnProps<T = any> {
	key: keyof T & string;
	label: string;
	hide?: boolean;
	disableSort?: boolean;
	hideLabel?: boolean;
	flexGrow?: 0 | 1;
	flexShrink?: 0 | 1;
	flexBasis?: any;
	width?: string;
	defaultSortDirection?: SortDirection;
	align?: 'left' | 'center' | 'right';
}

export { useTableContext } from './context';
export default Object.assign(Table, { Row });
