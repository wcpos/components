import * as React from 'react';
import { StyleProp, ViewStyle, GestureResponderEvent } from 'react-native';
import Text from '../text';
import Pressable from '../pressable';
import Icon from '../icon';
import Box from '../box';
import Loader from '../loader';
import * as Styled from './styles';

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
	size?: 'medium' | 'large' | 'small';
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
 * @TODO - button size, should there be a PressableBox component?
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
	size = 'medium',
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
			return <Loader type={type === 'inverse' ? 'primary' : 'inverse'} />;
		}

		if (typeof title === 'string') {
			return (
				<Text type={textType} size={size}>
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
			<Box horizontal space="small" align="center" paddingX="small" paddingY="xSmall">
				{accessoryLeft}
				{renderTitle()}
				{accessoryRight}
			</Box>
		</Styled.Background>
	);
};

export default Button;
