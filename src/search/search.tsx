import * as React from 'react';
import { ViewStyle } from 'react-native';
import TextInput from '../textinput';
import Icon from '../icon';
import Pill from '../pill';
import * as Styled from './styles';

/**
 *
 */
export type SearchActionsProps = {
	/**
	 *
	 */
	action: () => void;
} & Pick<import('../icon/icon').IconProps, 'name'>; // pass-through props

/**
 *
 */
export type SearchFiltersProps = {
	/**
	 *
	 */
	label: string;
} & Pick<import('../pill/pill').PillProps, 'onRemove'>; // pass-through props

/**
 *
 */
export type SearchProps = {
	/**
	 * Pass-through to TextInput onChange prop
	 */
	onSearch: (value: string) => void;
	/**
	 * Buttons displayed to the right of the search field
	 */
	actions?: (SearchActionsProps | React.ReactElement)[];
	/**
	 * Pills displayed in the search field
	 */
	filters?: SearchFiltersProps[];
	style?: ViewStyle;
} & Pick<
	import('../textinput/textinput').TextInputProps,
	'label' | 'value' | 'onClear' | 'placeholder'
>; // pass-through props

/**
 *
 */
export const Search = ({ actions, onSearch, filters, style, ...rest }: SearchProps) => {
	/**
	 *
	 */
	const renderFilters = React.useMemo(() => {
		if (filters && filters.length > 0) {
			return filters.map(({ label: filterLabel, onRemove }) => (
				<Pill removable onRemove={onRemove}>
					{filterLabel}
				</Pill>
			));
		}
		return undefined;
	}, [filters]);

	/**
	 *
	 */
	return (
		<Styled.Container style={style}>
			<Styled.Input>
				<TextInput
					hideLabel
					clearable
					onChange={onSearch}
					leftAccessory={renderFilters}
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
