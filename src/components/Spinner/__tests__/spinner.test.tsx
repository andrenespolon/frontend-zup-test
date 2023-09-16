import React from 'react';

import { render } from '@testing-library/react';

import { Spinner } from '../spinner';

describe('Spinner', () => {
	it('should render a wrapper', () => {
		const { getByTestId } = render(<Spinner />);
		expect(getByTestId('spinner-wrapper').tagName).toEqual('DIV');
	});

	it('should render a load in', () => {
		const { getByTestId } = render(<Spinner />);
		expect(getByTestId('spinner-inner-load').tagName).toEqual('DIV');
	});

	it('should render a spin in', () => {
		const { getByTestId } = render(<Spinner />);
		expect(getByTestId('spinner-inner-spin').tagName).toEqual('DIV');
	});
});
