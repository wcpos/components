import { JSONArray } from './json/array';
import { JSONNode } from './json/node';
import { JSONObject } from './json/object';
import { JSONValue } from './json/value';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof Arrow> = {
	node: JSONNode,
	string: JSONValue,
	object: JSONObject,
	array: JSONArray,
};
