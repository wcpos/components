import * as React from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';

import * as Styled from './styles';
import Box from '../box';
import Icon from '../icon';
import Loader from '../loader';
import Pressable from '../pressable';
import Text from '../text';

export type Props = {
	/**
	 *
	 */
	accessoryLeft?: React.ReactElement;
	/**
	 *
	 */
	accessoryRight?: React.ReactElement;
	/**
	 *
	 */
	background?: 'solid' | 'clear' | 'outline';
	/**
	 *
	 */
	children?: React.ReactNode;
	/**
	 *
	 */
	disabled?: boolean;
	/**
	 *
	 */
	loading?: boolean;
	/**
	 *
	 */
	onPress?: (event: GestureResponderEvent) => void;
	/**
	 *
	 */
	onPressIn?: (event: GestureResponderEvent) => void;
	/**
	 *
	 */
	onPressOut?: (event: GestureResponderEvent) => void;
	/**
	 *
	 */
	onLongPress?: (event: GestureResponderEvent) => void;
	/**
	 *
	 */
	raised?: boolean;
	/**
	 *
	 */
	size?: import('@wcpos/themes').FontSizeTypes;
	/**
	 *
	 */
	fill?: boolean;
	/**
	 *
	 */
	style?: StyleProp<ViewStyle>;
	/**
	 *
	 */
	title?: string | React.ReactElement;
	/**
	 *
	 */
	type?: import('@wcpos/themes').ColorTypes;
};

/**
 * TODO - button size, should there be a PressableBox component?
 */
const Button = ({
	accessoryLeft,
	accessoryRight,
	background = 'solid',
	children,
	disabled,
	loading,
	onPress,
	onPressIn,
	onPressOut,
	onLongPress,
	raised,
	size = 'normal',
	style,
	type = 'primary',
	...props
}: Props) => {
	const title = props.title || children;
	let textType = type;
	if (background === 'solid') {
		textType = type === 'inverse' ? 'primary' : 'inverse';
	}

	const renderTitle = () => {
		if (loading) {
			return (
				<Loader
					size={size}
					type={
						type === 'inverse' || background === 'outline' || background === 'clear'
							? 'primary'
							: 'inverse'
					}
				/>
			);
		}

		if (typeof title === 'string') {
			return (
				<Text numberOfLines={1} type={textType} size={size}>
					{title}
				</Text>
			);
		}
		// if (React.isValidElement(title) && title?.type?.name === 'Icon') {
		if (React.isValidElement(title)) {
			return React.cloneElement(title, { color: '#FFF' });
		}
		return title;
	};

	return (
		<Styled.Background
			as={Pressable}
			background={background}
			disabled={disabled}
			style={style}
			type={type}
			size={size}
			onPress={onPress}
			onPressIn={onPressIn}
			onPressOut={onPressOut}
			onLongPress={onLongPress}
			{...props}
		>
			<Box
				horizontal
				space="small"
				align="center"
				paddingX="none"
				paddingY="xSmall"
				style={{ width: '100%' }}
				distribution="center"
			>
				{accessoryLeft}
				{renderTitle()}
				{accessoryRight}
			</Box>
		</Styled.Background>
	);
};

export default Button;
