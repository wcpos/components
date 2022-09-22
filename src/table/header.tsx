import * as React from 'react';
import { GestureResponderEvent, FlexAlignType } from 'react-native';
import * as Styled from './styles';
import Text from '../text';
import Pressable from '../pressable';
import Box from '../box';
import SortIcon from '../sort-icon';
// import { useTableContext } from './context';

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
const TableHeader = ({ extraData }) => {
	const { columns, sort, sortBy, sortDirection, headerLabel } = extraData;

	return (
		<Styled.HeaderRow horizontal align="center">
			{columns.map((column) => {
				const {
					key,
					flex = '1',
					// width = '100%',
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
							{
								flex: Number(flex), // react-native wants flex to be a number?
								// width,
								alignItems: alignItemsMap[align],
							},
						]}
					>
						{sortable ? (
							<Pressable onPress={handlePress} style={{ width: '100%' }}>
								{({ hovered }: any) => (
									<Box
										horizontal
										space="xxSmall"
										align="center"
										style={{ justifyContent: alignItemsMap[align] }}
									>
										<Text uppercase size="small" numberOfLines={1} type="textMuted">
											{headerLabel({ column })}
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
									{headerLabel({ column })}
								</Text>
							)
						)}
					</Box>
				);
			})}
		</Styled.HeaderRow>
	);
};

export default TableHeader;
