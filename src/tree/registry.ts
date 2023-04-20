import { JSONArray } from './json/array';
import { JSONNode } from './json/node';
import { JSONObject } from './json/object';
import { JSONValue } from './json/value';

export default {
	node: JSONNode,
	string: JSONValue,
	object: JSONObject,
	array: JSONArray,
};
