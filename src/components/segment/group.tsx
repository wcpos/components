import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import get from 'lodash/get';
import * as Styled from './styles';

type Segment = typeof import('./segment').Segment;

export interface SegmentGroupProps {
	/**
	 *
	 */
	children: React.ReactElement<Segment>[] | React.ReactElement<Segment>;
	/**
	 *
	 */
	style?: StyleProp<ViewStyle>;
	/**
	 *
	 */
	raised?: boolean;
	/**
	 *
	 */
	direction?: 'horizontal' | 'vertical';
	/**
	 *
	 */
	group?: 'first' | 'middle' | 'last';
	/**
	 *
	 */
	grow?: boolean;
	/**
	 *
	 */
	isNested?: boolean;
}

export const SegmentGroup = ({
	children,
	direction = 'vertical',
	style,
	raised = true,
	group,
	grow,
	isNested,
}: SegmentGroupProps) => {
	const count = React.Children.count(children);

	const renderSegement = (
		child: React.ReactElement<Segment | typeof SegmentGroup>,
		index: number
	) => {
		const isFirst = index === 0 && group !== 'middle';
		const isLast = index === count - 1 && group !== 'middle';
		const _isNested = get(child, ['type', 'name']) === 'SegmentGroup';

		const segmentProps = {
			direction, // direction may be overwritten by child
			group: isFirst ? 'first' : isLast ? 'last' : 'middle',
			...child.props,
			raised: false, // should always be false for grouped segments
			isNested: _isNested,
		};

		return React.cloneElement(child, segmentProps);
	};

	return (
		<Styled.Group
			style={style}
			raised={raised}
			direction={direction}
			grow={grow}
			isNested={isNested}
		>
			{React.Children.map(children, renderSegement)}
		</Styled.Group>
	);
};
