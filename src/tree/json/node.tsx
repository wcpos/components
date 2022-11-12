import * as React from 'react';

// import { JSONArray } from './array';
// import { JSONObject } from './object';
import { getObjectType } from './utils';
// import { JSONValue } from './value';

const dataTypeToComponent = {
	string: 'string',
	number: 'string',
	boolean: 'string',
	date: 'string',
	null: 'string',
	undefined: 'string',
	array: 'array',
	object: 'object',
};

export interface JSONNodeProps {
	data: any;
	name: string;
	isCollapsed?: (keyPath: string[], deep: number, data: any) => boolean;
	onExpand?: (keyPath: string[], deep: number, data: any) => void;
	keyPath?: string[];
	deep?: number;
	registry: any;
}

export const JSONNode = ({
	data,
	name,
	isCollapsed = (keyPath: string[]) => keyPath.length > 0,
	onExpand = () => {},
	keyPath = [],
	deep = 0,
	registry,
}: JSONNodeProps) => {
	const dataType = getObjectType(data).toLowerCase();
	const Component = registry[dataTypeToComponent[dataType]];
	let value;

	switch (dataType) {
		case 'string':
			value = `${data}`;
			break;
		case 'boolean':
			value = !!data;
			break;
		case 'date':
			value = data.toISOString();
			break;
		case 'null':
			value = null;
			break;
		case 'undefined':
			value = undefined;
			break;
		default:
			value = data;
	}

	return (
		<Component
			name={name}
			data={value}
			keyPath={keyPath}
			deep={deep}
			isCollapsed={isCollapsed}
			onExpand={onExpand}
			registry={registry}
		/>
	);

	// switch (dataType) {
	// 	case 'String':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value={`"${data}"`}
	// 				originalValue={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Number':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value={data}
	// 				originalValue={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Boolean':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value={!!data}
	// 				originalValue={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Date':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value={data.toISOString()}
	// 				originalValue={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Null':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value="null"
	// 				originalValue="null"
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Undefined':
	// 		return (
	// 			<JSONValue
	// 				name={name}
	// 				value="undefined"
	// 				originalValue="undefined"
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Object':
	// 		return (
	// 			<JSONObject
	// 				name={name}
	// 				data={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	case 'Array':
	// 		return (
	// 			<JSONArray
	// 				name={name}
	// 				data={data}
	// 				keyPath={keyPath}
	// 				deep={deep}
	// 				isCollapsed={isCollapsed}
	// 				onExpand={onExpand}
	// 			/>
	// 		);
	// 	default:
	// 		return null;
	// }
};
