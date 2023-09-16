import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Spinner } from '@components/Spinner';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePrevious } from '@hooks/usePrevious';
import { LoadingButton } from '@mui/lab';
import {
	Box,
	Button,
	Fade,
	FormGroup as Form,
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
} from '@mui/material';
import { uuid } from '@utils/uuid';
import type { TaskPayload } from 'types/Task';
import type { ObjectSchema } from 'yup';
import { object, string } from 'yup';

import type { TaskFormProps } from './types';

/**
 * Task schema
 */
const taskSchema: ObjectSchema<TaskPayload> = object().shape({
	title: string()
		.required('This field is required')
		.min(3, 'Title must be greater than 3 characters')
		.max(250, 'Title cannot be longer than 250 characters'),
	description: string()
		.required('This field is required')
		.min(3, 'Description must be greater than 3 characters')
		.max(250, 'Description cannot be longer than 250 characters'),
}) as any;

/**
 * __Task Form__
 */
export const TaskForm = React.memo<TaskFormProps>(
	({
		testId,
		isLoading,
		isFetching,
		isEditMode,
		values,
		onClose,
		onSubmit,
	}) => {
		const [isActionbuttonDisabled, setIsActionButtunDisabled] =
			React.useState<boolean>(false);

		const labelButton = isEditMode ? 'Edit' : 'Add';

		const prevTitleValue = usePrevious(values?.title);
		const prevDescriptionValue = usePrevious(values?.description);

		const { control, handleSubmit, watch } = useForm<TaskPayload>({
			resolver: yupResolver(taskSchema),
			values: values ?? undefined,
			defaultValues: {
				title: '',
				description: '',
			},
		});

		const formValues = watch();

		/**
		 * Handle submit
		 */
		const onSubmitHandler = (data: TaskPayload) => {
			if (onSubmit instanceof Function) {
				if (!data?.id && !isEditMode) {
					const id = uuid();
					onSubmit({ ...data, id });
				} else {
					onSubmit(data);
				}
			}
		};

		/**
		 * Enable action button
		 */
		React.useEffect(() => {
			if (isEditMode && formValues) {
				if (
					formValues?.title === prevTitleValue &&
					formValues?.description === prevDescriptionValue
				) {
					setIsActionButtunDisabled(true);
				} else {
					setIsActionButtunDisabled(false);
				}
			}
		}, [formValues, prevTitleValue, prevDescriptionValue]);

		return (
			<Box
				sx={{
					minWidth: '350px',
				}}
				data-testid={testId ? `${testId}--task-wrapper` : 'task-wrapper'}
			>
				<Fade in appear timeout={600}>
					<Box
						sx={{
							minHeight: '300px',
						}}
					>
						<Form data-testid={testId ? `${testId}--task-form` : 'task-form'}>
							<Controller
								control={control}
								name='title'
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<FormControl required fullWidth>
										<InputLabel>Title</InputLabel>
										<OutlinedInput
											name='title'
											value={value}
											onChange={onChange}
											error={Boolean(error?.message)}
											data-testid={
												testId
													? `${testId}--task-form-input-title`
													: 'task-form-input-title'
											}
										/>
										<FormHelperText error={Boolean(error?.message)}>
											{error?.message ?? 'Insert a title of task'}
										</FormHelperText>
									</FormControl>
								)}
							/>
							<Controller
								control={control}
								name='description'
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<FormControl required fullWidth>
										<InputLabel>Description</InputLabel>
										<OutlinedInput
											name='description'
											value={value}
											multiline
											rows={5}
											onChange={onChange}
											error={Boolean(error?.message)}
											data-testid={
												testId
													? `${testId}--task-form-input-description`
													: 'task-form-input-description'
											}
										/>
										<FormHelperText error={Boolean(error?.message)}>
											{error?.message ?? 'Provide a desciption'}
										</FormHelperText>
									</FormControl>
								)}
							/>
						</Form>
						<Box
							sx={{
								paddingTop: 3,
								display: 'flex',
								justifyContent: 'flex-end',
								gap: 1,
							}}
						>
							{isEditMode ? (
								<Button
									variant='text'
									disabled={isLoading || isFetching}
									onClick={onClose}
									data-testid={
										testId
											? `${testId}--task-form-button-cancel`
											: 'task-form-button-cancel'
									}
								>
									Cancel
								</Button>
							) : null}
							<LoadingButton
								loading={isFetching}
								disabled={isActionbuttonDisabled}
								loadingIndicator={<Spinner isDisabled size={16} />}
								onClick={handleSubmit(onSubmitHandler)}
								variant='contained'
								data-testid={
									testId
										? `${testId}--task-form-button-action`
										: 'task-form-button-action'
								}
							>
								{labelButton}
							</LoadingButton>
						</Box>
					</Box>
				</Fade>
			</Box>
		);
	}
);
