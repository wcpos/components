import * as React from 'react';
import isFunction from 'lodash/isFunction';
import Text from '../text';
import Button from '../button';
// import * as Styled from './styles';

export interface TabItemProps {
	title: string | ((props: { focused: boolean }) => React.ReactNode);
	onPress: () => void;
	focused: boolean;
}

const TabItem = ({ onPress, focused, ...props }: TabItemProps) => {
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

export default TabItem;
