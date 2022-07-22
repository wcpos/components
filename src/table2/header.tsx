import * as React from 'react';
import { GestureResponderEvent, ViewStyle, FlexAlignType } from 'react-native';
import * as Styled from './styles';
import Text from '../text';
import Pressable from '../pressable';
import Box from '../box';
import SortIcon from '../sort-icon';

export interface TableHeaderProps<T> {
	columns: import('./').ColumnProps<T>[];
	style?: ViewStyle;
	sort?: import('./').Sort;
	sortBy?: keyof T & string;
	sortDirection?: import('./').SortDirection;
}

/**
 *
 */
const alignItemsMap: Record<string, FlexAlignType> = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
};

/**
 *
 */
const TableHeader = <T extends object>({
	columns,
	style,
	sort,
	sortBy,
	sortDirection,
}: TableHeaderProps<T>) => {
	return (
		<Styled.HeaderRow horizontal align="center">
			{columns.map((column) => {
				const {
					key,
					flexGrow = 1,
					flexShrink = 1,
					flexBasis = 'auto',
					width = '100%',
					disableSort = false,
					defaultSortDirection = 'asc',
					hideLabel = false,
					label,
					align = 'left',
				} = column;
				const sortable = !disableSort && typeof sort === 'function';
				const showSortIndicator = sortable && sortBy === key;
				const newSortDirection =
					sortBy !== key ? defaultSortDirection : sortDirection === 'desc' ? 'asc' : 'desc';

				const handlePress = (event: GestureResponderEvent) => {
					if (sortable) {
						sort({
							defaultSortDirection,
							event,
							sortBy: key,
							sortDirection: newSortDirection,
						});
					}
				};

				return (
					<Box
						key={key}
						padding="small"
						style={[
							{ flexGrow, flexShrink, flexBasis, width, alignItems: alignItemsMap[align] },
							style,
						]}
					>
						{sortable ? (
							<Pressable onPress={handlePress}>
								{({ hovered }: any) => (
									<Box horizontal space="xxSmall" align="center" style={{ flex: 1 }}>
										<Text uppercase size="small" numberOfLines={1} type="textMuted">
											{label}
										</Text>
										{(showSortIndicator || hovered) && (
											<SortIcon
												hovered={hovered}
												direction={showSortIndicator ? sortDirection : undefined}
											/>
										)}
									</Box>
								)}
							</Pressable>
						) : (
							!hideLabel && (
								<Text uppercase size="small" numberOfLines={1} type="textMuted">
									{label}
								</Text>
							)
						)}
					</Box>
				);
			})}
		</Styled.HeaderRow>
	);
};

export default React.memo(TableHeader);
