import React from 'react';

import { TaskForm } from '@components/TaskForm';
import { useTask } from '@hooks/useTask';
import { Box, Typography } from '@mui/material';
import type { TaskPayload } from 'types/Task';

/**
 * __Home Page__
 */
export default function HomePage() {
	const { createNewTask, isFetching } = useTask();

	/**
	 * Create new task
	 */
	const handleCreateNewTask = React.useCallback(async (task?: TaskPayload) => {
		if (task) {
			createNewTask(task);
		}
	}, []);

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
				Frontend Zup Test
			</Typography>
			<Typography>
				Hello! 👋 Welcome to task manager. Please, create a new task to start.
			</Typography>
			<TaskForm isFetching={isFetching} onSubmit={handleCreateNewTask} />
		</Box>
	);
}
