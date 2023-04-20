import { FormatAddress, FormatAddressProps } from './address';
import FormatCurrency, { FormatCurrencyProps } from './currency';
import FormatDate, { FormatDateProps } from './date';
import { FormatList, FormatListProps } from './list';
import { FormatName, FormatNameProps } from './name';
import { FormatNumber, FormatNumberProps } from './number';

import type { Meta } from '@storybook/react';

export type {
	FormatNameProps,
	FormatNumberProps,
	FormatListProps,
	FormatAddressProps,
	FormatDateProps,
	FormatCurrencyProps,
};

const meta: Meta<typeof Arrow> = {
	Name: FormatName,
	Number: FormatNumber,
	List: FormatList,
	Address: FormatAddress,
	Date: FormatDate,
	Currency: FormatCurrency,
};
