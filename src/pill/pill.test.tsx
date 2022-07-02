import * as React from 'react';
import renderWithTheme from '../../../jest/render-with-theme';
import { Pill } from './pill';

describe('Pill', () => {
	it('renders correctly', () => {
		const { container } = renderWithTheme(<Pill>Test</Pill>);
		expect(container.firstChild).toBeInTheDocument();
		expect(container.firstChild?.textContent).toEqual('Test');
	});
});
