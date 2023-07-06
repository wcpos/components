import * as React from 'react';

import * as Styled from './styles';
import Pressable from '../pressable';

type IDimmerProps = {
	children?: React.ReactNode;
	onPress?: () => void;
};

const Dimmer = ({ children, onPress }: IDimmerProps) => {
	return (
		<Pressable onPress={onPress}>
			<Styled.Dimmer>{children}</Styled.Dimmer>
		</Pressable>
	);
};

export default Dimmer;
