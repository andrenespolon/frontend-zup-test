import React from 'react';

import { useRouter } from 'next/router';

import { Spinner } from '@components/Spinner';
import { TaskForm } from '@components/TaskForm';
import { useTask } from '@hooks/useTask';
import { Error } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import type { TaskPayload } from 'types/Task';

/**
 * __Task Id Page__
 */
export default function TaskIsPage() {
	const { getTaskById, updateTask, isLoading, isFetching } = useTask();
	const { isReady, query, back } = useRouter();

	const [editTask, setEditTask] = React.useState<TaskPayload | undefined>(
		undefined
	);

	/**
	 * Update task
	 */
	const handleUpdateNewTask = React.useCallback(async (task?: TaskPayload) => {
		if (task) {
			updateTask(task);
		}
	}, []);

	/**
	 * Fetch task
	 */
	const fetchCurrentTask = React.useCallback(async () => {
		if (isReady && query) {
			const { taskId } = query;
			const task = await getTaskById(taskId as string);
			if (task) {
				setEditTask(task);
			}
		}
	}, []);

	React.useEffect(() => {
		setEditTask(undefined);
		fetchCurrentTask();
	}, [isReady, query]);

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 4,
			}}
		>
			<Typography variant='h3' paragraph>
				Edit task
			</Typography>
			<Typography>Manage your task easely.</Typography>
			{!editTask && isLoading ? (
				<Box
					sx={{
						minHeight: '450px',
					}}
				>
					<Spinner size={32} />
				</Box>
			) : null}
			{editTask && !isLoading ? (
				<TaskForm
					isEditMode
					values={editTask}
					isFetching={isFetching}
					onClose={back}
					onSubmit={handleUpdateNewTask}
				/>
			) : null}
			{!editTask && !isLoading ? (
				<Box
					sx={{
						padding: 2,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Box
						sx={{
							fontSize: '3rem',
						}}
					>
						<Error color='disabled' fontSize='inherit' />
					</Box>
					<Typography variant='h5'>
						Oh no! Something was wrong. Please, try again.
					</Typography>
					<Button variant='contained' onClick={fetchCurrentTask}>
						Try again
					</Button>
				</Box>
			) : null}
		</Box>
	);
}
