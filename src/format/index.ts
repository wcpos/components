import { FormatAddress, FormatAddressProps } from './address';
import FormatCurrency, { FormatCurrencyProps } from './currency';
import FormatDate, { FormatDateProps } from './date';
import { FormatList, FormatListProps } from './list';
import { FormatName, FormatNameProps } from './name';
import { FormatNumber, FormatNumberProps } from './number';

export type {
	FormatNameProps,
	FormatNumberProps,
	FormatListProps,
	FormatAddressProps,
	FormatDateProps,
	FormatCurrencyProps,
};

export default {
	Name: FormatName,
	Number: FormatNumber,
	List: FormatList,
	Address: FormatAddress,
	Date: FormatDate,
	Currency: FormatCurrency,
};
