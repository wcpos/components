import * as React from 'react';

import { getObjectType } from './utils';

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
};
