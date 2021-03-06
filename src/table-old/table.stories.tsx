import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Text from '../text';
// import { text, select, boolean } from '@storybook/addon-knobs';

import Table, { TableProps } from './table';

export default {
	title: 'Components/TableOld',
	component: Table,
};

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

export const BasicUsage = (props: TableProps<Data>) => <Table<Data> {...props} />;
BasicUsage.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data,
	style: { height: 300 },
	// sort: action('Sort'),
	// sortBy: 'name',
	// sortDirection: 'asc',
};

export const Empty = (props: TableProps<Data>) => <Table<Data> {...props} />;
Empty.args = {
	columns: [
		{ key: 'quantity', label: 'Qty', flexGrow: 0, flexShrink: 1, width: '20%' },
		{ key: 'name', label: 'Name', flexGrow: 1, flexShrink: 0, width: '50%' },
		{ key: 'price', label: 'Price', flexGrow: 0, flexShrink: 1, width: '30%' },
	],
	data: [],
	style: { height: 300 },
	sort: action('Sort'),
	sortBy: 'name',
	sortDirection: 'asc',
	empty: 'Nothing Found',
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

export const CustomTableCell = (props: TableProps<Data>) => {
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
			onRender: (item: Data) => <Text>{`$ ${item.price.toFixed(2)}`}</Text>,
		},
	],
	data,
	style: { height: 300 },
	sort: action('Sort'),
	sortBy: 'name',
	sortDirection: 'asc',
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

export const TableFooter = (props: TableProps<Data>) => {
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
