import * as React from 'react';

import isFunction from 'lodash/isFunction';

import Button from '../button';
import Text from '../text';
// import * as Styled from './styles';

export interface TabItemProps {
	title: string | ((props: { focused: boolean }) => React.ReactNode);
	onPress: () => void;
	focused: boolean;
}

export const TabItem = ({ onPress, focused, ...props }: TabItemProps) => {
	const title = isFunction(props.title) ? props.title({ focused }) : props.title;

	return (
		<Button onPress={onPress} background={focused ? 'solid' : 'clear'}>
			{typeof title === 'string' ? (
				<Text type={focused ? 'inverse' : 'primary'}>{title}</Text>
			) : (
				title
			)}
		</Button>
	);
};
