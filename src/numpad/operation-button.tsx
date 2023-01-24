import * as React from 'react';

import { ACTIONS } from './reducer';
import * as Styled from './styles';
import Button from '../button';
import Icon, { IconName } from '../icon';

const iconMap: Record<string, IconName> = {
	'+/-': 'plusMinus',
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
	const handlePress = React.useCallback(() => {
		dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
	}, [operation, dispatch]);

	return (
		<Styled.NumpadButton as={Button} onPress={handlePress}>
			<Icon name={iconMap[operation]} size="xSmall" type="inverse" />
		</Styled.NumpadButton>
	);
};

export default OperationButton;
