import React from 'react';
import { StyledText } from './styles';

/**
 * note: weird bug in storybook when importing * as Styled
 */

export type Props = {
	align?: 'left' | 'right' | 'center' | 'justify';
	children: string;
	italic?: boolean;
	onPress?: () => void;
	size?: 'normal' | 'large' | 'small';
	style?: import('react-native').TextStyle;
	type?:
		| 'attention'
		| 'critical'
		| 'info'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'inverse';
	uppercase?: boolean;
	weight?: 'normal' | 'bold' | 'light';
};

const Text: React.FC<Props> = ({
	align = 'left',
	children,
	italic,
	onPress,
	size = 'normal',
	style = {},
	type = 'primary',
	uppercase,
	weight = 'normal',
}) => {
	return (
		<StyledText
			align={align}
			italic={italic}
			onPress={onPress}
			size={size}
			style={style}
			type={type}
			uppercase={uppercase}
			weight={weight}
		>
			{children}
		</StyledText>
	);
};

export default Text;
