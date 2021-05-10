import * as React from 'react';
import { Animated, View, StyleSheet, Easing, ViewStyle, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from 'styled-components/native';
import * as Styled from './styles';
import Text from '../text';
import Icon from '../icon';
import Pressable from '../pressable';

export interface TagProps {
	/**
	 * Tag label
	 */
	children: string;
	/**
	 * Set to `true` add remove icon.
	 */
	removable?: boolean;
	/**
	 * Set to `true` to disable.
	 */
	disabled?: boolean;
	/**
	 * Called if remove icon is pressed
	 */
	onRemove?: () => void;
	/**
	 * Called if tag is pressed
	 */
	onPress?: () => void;
}

/**
 *
 */
export const Tag = ({ children, removable, disabled, onRemove, onPress }: TagProps) => {
	const theme = useTheme();

	return (
		<Pressable onPress={onPress} style={{ marginRight: 5, marginBottom: 5 }}>
			<Styled.Tag disabled={disabled}>
				<Styled.Label size="small">{children}</Styled.Label>
				{removable && <Icon name="clear" size="small" disabled={disabled} onPress={onRemove} />}
			</Styled.Tag>
		</Pressable>
	);
};

export interface SkeletonProps {
	backgroundColor?: string;
	highlightColor?: string;
	speed?: number;
	style?: ViewStyle;
}

/**
 *
 */
const Skeleton = ({
	backgroundColor = '#E1E9EE',
	highlightColor = '#F2F8FC',
	speed = 800,
	style = { width: '50px', height: '24px', borderRadius: 10 },
}: SkeletonProps) => {
	const animatedValue = new Animated.Value(0);

	React.useEffect(() => {
		Animated.loop(
			Animated.timing(animatedValue, {
				toValue: 1,
				duration: speed,
				easing: Easing.ease,
				useNativeDriver: Platform.OS !== 'web',
			})
		).start();
	});

	const translateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-350, 350],
	});

	return (
		<View style={{ position: 'relative' }}>
			<View style={[style, { backgroundColor, overflow: 'hidden' }]}>
				<Animated.View
					style={[
						StyleSheet.absoluteFill,
						{
							transform: [{ translateX }],
						},
					]}
				>
					<LinearGradient
						colors={[backgroundColor, highlightColor, backgroundColor] as string[]}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={{ flex: 1 }}
					/>
				</Animated.View>
			</View>
		</View>
	);
};

Tag.Skeleton = Skeleton;
