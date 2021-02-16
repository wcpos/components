import * as React from 'react';
import * as Styled from './styles';

type Segment = typeof import('./segment').default;

export interface ISegmentGroupProps {
	children: React.ReactElement<Segment>[] | React.ReactElement<Segment>;
	style?: import('react-native').ViewStyle;
	raised?: boolean;
	direction?: 'vertical' | 'horizontal';
};

export const SegmentGroup = ({ children, direction = 'vertical', style, raised = true }: ISegmentGroupProps) => {
	const count = React.Children.count(children);

	return (
		<Styled.Group style={style} raised={raised} direction={direction}>
			{React.Children.map(children, (child, index) => {
				const props = { group: 'middle', raised: false };
				if (index === 0) {
					props.group = 'first';
				}
				if (index === count - 1) {
					props.group = 'last';
				}
				return React.cloneElement(child, props);
			})}
		</Styled.Group>
	);
};

export default SegmentGroup;
