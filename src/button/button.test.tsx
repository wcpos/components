import * as React from 'react';
import renderWithTheme from '@wcpos/core/jest/render-with-theme';
import Button from '.';

describe('Button', () => {
	it('renders correctly', () => {
		const { container } = renderWithTheme(<Button />);
		expect(container.firstChild).toBeInTheDocument();
	});
});
