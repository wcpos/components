import * as React from 'react';

import { ACTIONS } from './reducer';
import Button from '../button';
import Icon, { IconName } from '../icon';

const iconMap: Record<string, IconName> = {
	'%': 'percent',
	'+': 'plus',
	'-': 'minus',
	'*': 'xmark',
	'÷': 'divide',
};

interface OperationButtonProps {
	dispatch: any;
	operation: keyof typeof iconMap;
}

const OperationButton = ({ dispatch, operation }: OperationButtonProps) => {
	return (
		<Button
			onPress={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
			style={{ flex: 1 }}
		>
			<Icon name={iconMap[operation]} size="xSmall" type="inverse" />
		</Button>
	);
};

export default OperationButton;
