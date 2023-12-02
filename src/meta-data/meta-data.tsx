import * as React from 'react';

import * as Styled from './styles';
import Icon from '../icon';
import TextInput from '../textinput';

export interface MetaDataProps {
	data: { id: number; key: string; value: string }[];
}

export const MetaData = ({ data }: MetaDataProps) => {
	const handleAddRow = () => {
		console.log('hi');
	};

	return (
		<Styled.Container>
			{data?.map((meta) => (
				<Styled.Row key={meta.key}>
					<Styled.Cell>
						<TextInput label="Key" value={meta.key} />
					</Styled.Cell>
					<Styled.Cell>
						<TextInput label="Value" value={meta.value} />
					</Styled.Cell>
					<Icon name="add" onPress={handleAddRow} />
				</Styled.Row>
			))}
		</Styled.Container>
	);
};
