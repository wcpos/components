import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Text from '../text';
import Button from '../button';
// import { text, select, boolean } from '@storybook/addon-knobs';

import Table, { TableProps } from '.';

export default {
	title: 'Components/Table',
	component: Table,
} as ComponentMeta<typeof Table>;

const size = ['Small', 'Medium', 'Large', 'Massive'];
const colour = ['Red', 'Blue', 'Green', 'Yellow'];
const noun = ['Apple', 'Pear', 'Orange', 'Banana'];

const name = () =>
	`${size[Math.floor(Math.random() * noun.length)]} ${
		colour[Math.floor(Math.random() * colour.length)]
	} ${noun[Math.floor(Math.random() * noun.length)]}`;
const price = () => Math.floor(Math.random() * 100);
const quantity = () => Math.floor(Math.random() * 10);
const height = () => 25 + Math.floor(Math.random() * 100);

interface Data {
	name: string;
	price: number;
	quantity: number;
	height: number;
}

const data = new Array(1000)
	.fill(true)
	.map(() => ({ name: name(), price: price(), quantity: quantity(), height: height() }));

/**
 *
 */
export const BasicUsage: ComponentStory<typeof Table> = (props: TableProps<Data>) => (
	<Table<Data> {...props} />
);
BasicUsage.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data,
	estimatedItemSize: 32,
	style: { height: 300 },
	// sort: action('Sort'),
	// sortBy: 'name',
	// sortDirection: 'asc',
};

export const Empty: ComponentStory<typeof Table> = (props: TableProps<Data>) => (
	<Table<Data> {...props} />
);
Empty.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data: [],
	sort: action('Sort'),
	sortBy: 'name',
	sortDirection: 'asc',
	empty: 'Nothing Found',
	estimatedItemSize: 32,
};

// export const CustomTableRow = (props: TableProps<Data>) => {
// 	return (
// 		<Table {...props}>
// 			{(rowProps) => {
// 				const { item, ...rest } = rowProps;
// 				return (
// 					<Table.Row
// 						item={item}
// 						{...rest}
// 						columns={props.columns}
// 						style={{ height: item.height }}
// 					/>
// 				);
// 			}}
// 		</Table>
// 	);
// };
// CustomTableRow.args = {
// 	columns: [
// 		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
// 		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
// 		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
// 	],
// 	data,
// 	style: { height: 300 },
// 	// sort: action('Sort'),
// 	// sortBy: 'name',
// 	// sortDirection: 'asc',
// };

export const CustomTableCell: ComponentStory<typeof Table> = (props: TableProps<Data>) => {
	return <Table<Data> {...props} />;
};
CustomTableCell.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{
			key: 'price',
			label: 'Price',
			flexGrow: 0,
			flexShrink: 1,
			width: '30%',
		},
	],
	data,
	sort: action('Sort'),
	sortBy: 'name',
	sortDirection: 'asc',
	style: { height: 300 },
};

// export const CustomTable = (props: TableProps) => {
// 	return (
// 		<Table {...props}>
// 			<Table.Header>
// 				<Table.Header.Row>
// 					{({ getHeaderCellProps }) => {
// 						const { label } = getHeaderCellProps();
// 						return <Table.Header.Row.Cell {...getHeaderCellProps()}>{label}</Table.Header.Row.Cell>;
// 					}}
// 				</Table.Header.Row>
// 			</Table.Header>
// 			<Table.Body>
// 				{({ item, columns }) => {
// 					return (
// 						<Table.Body.Row rowData={item} columns={columns}>
// 							{({ cellData, column, getCellProps }) => (
// 								<Table.Body.Row.Cell {...getCellProps()} cellData={cellData} columnData={column} />
// 							)}
// 						</Table.Body.Row>
// 					);
// 				}}
// 			</Table.Body>
// 		</Table>
// 	);
// };
// CustomTable.args = {
// 	columns: [
// 		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
// 		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
// 		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
// 	],
// 	data: [
// 		{ name: 'Apples', price: 1.29, quantity: 2 },
// 		{ name: 'Pears', price: 3.1, quantity: 0 },
// 		{ name: 'Oranges', price: 0.99, quantity: 44 },
// 	],
// 	sort: action('Sort'),
// 	sortBy: 'name',
// 	sortDirection: 'asc',
// };

export const TableFooter: ComponentStory<typeof Table> = (props: TableProps<Data>) => {
	return <Table<Data> {...props} />;
};
TableFooter.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data,
	style: { height: 300 },
	sort: action('Sort'),
	sortBy: 'name',
	sortDirection: 'asc',
	footer: <Text>hi</Text>,
};

/**
 *
 */
export const AddOrRemoveRows: ComponentStory<typeof Table> = (props: TableProps<Data>) => {
	const [d, setData] = React.useState(props.data);

	const cellRenderer = React.useCallback(
		(item, column, itemIndex) => {
			if (column.key === 'action') {
				return (
					<Button
						title="Remove"
						onPress={() => {
							debugger;
							const newData = [...d];
							newData.splice(itemIndex, 1);
							setData(newData);
						}}
					/>
				);
			}
			return <Text>{String(item[column.key])}</Text>;
		},
		[d]
	);

	/**
	 *
	 */
	const renderItem = React.useCallback(
		({ item, index }) =>
			// renderContext: TableRowRenderContext<T>,
			{
				// subscribe to item, special case to trigger render for data changes
				// @TODO: find a better way to do this
				// @ts-ignore
				// const forceRender = useObservableState(item.$);

				return (
					<Table.Row
						// config={renderContext}
						item={item}
						columns={props.columns}
						itemIndex={index}
						cellRenderer={cellRenderer}
					/>
				);
			},
		[cellRenderer, props.columns]
	);

	return (
		<Table<Data>
			{...props}
			data={d}
			renderItem={renderItem}
			footer={
				<Button
					title="Add"
					onPress={() => setData([{ name: 'New Row', price: 0, quantity: 0 }, ...d])}
				/>
			}
		/>
	);
};
AddOrRemoveRows.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
		{ key: 'action', label: '', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data,
	estimatedItemSize: 48,
	style: { height: 300 },
};
