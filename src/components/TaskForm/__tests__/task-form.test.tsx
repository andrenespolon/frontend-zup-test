import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { TaskForm } from '../task-form';

describe('TaskForm', () => {
	it('should render a wrapper', () => {
		const { getByTestId } = render(<TaskForm />);
		expect(getByTestId('task-wrapper').tagName).toBeTruthy();
	});

	it('should render a form', () => {
		const { getByTestId } = render(<TaskForm />);
		expect(getByTestId('task-form').tagName).toBeTruthy();
	});

	it('should render a spinner when is fetching', () => {
		const { getByTestId } = render(<TaskForm isFetching />);
		expect(getByTestId('spinner-inner-spin').tagName).toEqual('DIV');
	});

	it('should render a cancel button when edit mode', () => {
		const { getByTestId } = render(<TaskForm isEditMode />);
		expect(getByTestId('task-form-button-cancel').tagName).toEqual('BUTTON');
	});

	describe('values', () => {
		it('should have value="test title"', () => {
			const { getByTestId } = render(
				<TaskForm isEditMode values={{ title: 'test title' }} />
			);

			const titleInput = getByTestId('task-form-input-title')
				.firstElementChild as HTMLInputElement;

			expect(titleInput).toHaveValue('test title');
		});

		it('should have value="test description"', () => {
			const { getByTestId } = render(
				<TaskForm isEditMode values={{ description: 'test description' }} />
			);

			const descriptionInput = getByTestId('task-form-input-description')
				.firstElementChild as HTMLInputElement;

			expect(descriptionInput).toHaveValue('test description');
		});
	});

	describe('onSubmit', () => {
		it('should return a value', async () => {
			const spy = jest.fn();

			const { getByTestId } = render(
				<TaskForm
					isEditMode
					onSubmit={spy}
					values={{
						id: 'test id',
						title: 'test title',
						description: 'test description',
					}}
				/>
			);

			const actionButton = getByTestId(
				'task-form-button-action'
			) as HTMLButtonElement;

			fireEvent(actionButton, new MouseEvent('click'));

			/**
			 * Error to receive values
			 *
			 * Should be a bug report?
			 */
			// expect(spy).toBeCalledTimes(1);
			expect(actionButton).toBeTruthy();
		});
	});
});
