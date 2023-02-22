import * as React from 'react';
import { ViewStyle } from 'react-native';

import SearchFilter, { SearchFilterProps } from './filters';
import * as Styled from './styles';
import Icon from '../icon';
import Pill from '../pill';
import TextInput, { TextInputProps } from '../textinput';

/**
 *
 */
export type SearchActionsProps = {
	/** */
	action: () => void;
} & Pick<import('../icon/icon').IconProps, 'name'>; // pass-through props

/**
 *
 */
export type SearchProps = {
	/**  Pass-through to TextInput onChange prop */
	onSearch: (value: string) => void;

	/** Buttons displayed to the right of the search field */
	actions?: (SearchActionsProps | React.ReactElement)[];

	/** Pills displayed in the search field */
	filters?: SearchFilterProps[];

	/**  */
	style?: ViewStyle;
} & Pick<TextInputProps, 'value' | 'onClear' | 'placeholder'>; // pass-through props

/**
 *
 */
export const Search = ({ actions, onSearch, filters, style, ...rest }: SearchProps) => {
	/**
	 *
	 */
	return (
		<Styled.Container style={style}>
			<Styled.Input>
				<TextInput
					clearable
					onChangeText={onSearch}
					leftAccessory={
						Array.isArray(filters) && filters.length > 0 ? (
							<SearchFilter filters={filters} />
						) : undefined
					}
					{...rest}
				/>
			</Styled.Input>
			{/* {actions && (
				<Styled.Actions>
					{actions.map((action) => {
						if (React.isValidElement(action)) {
							return action;
						}
						return <Icon name={action.name} onPress={action.action} />;
					})}
				</Styled.Actions>
			)} */}
		</Styled.Container>
	);
};
