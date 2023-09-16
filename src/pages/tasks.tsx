import React from 'react';

import { useRouter } from 'next/router';

import { ButtonMenu } from '@components/ButtonMenu';
import { useTask } from '@hooks/useTask';
import {
	Box,
	Button,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import type { TaskPayload } from 'types/Task';

/**
 * __Tasks Page__
 */
export default function TasksPage() {
	const { deleteTask, tasks } = useTask();
	const { push } = useRouter();

	/**
	 * Handle edit
	 */
	const handleEditTask = (task?: TaskPayload) => {
		if (task && task?.id) {
			push(task.id);
		}
	};

	/**
	 * Handle delete
	 */
	const handleDeleteTask = (taskId?: string) => {
		if (taskId) {
			deleteTask(taskId);
		}
	};

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
				Tasks
			</Typography>
			<Typography>List of tasks that you created.</Typography>
			<Box
				sx={{
					display: 'flex',
					maxWidth: '650px',
				}}
			>
				{tasks && tasks?.length > 0 ? (
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Description</TableCell>
								<TableCell />
							</TableRow>
						</TableHead>
						<TableBody>
							{tasks.map(ele => (
								<TableRow key={ele?.id}>
									<TableCell>{ele?.title}</TableCell>
									<TableCell>{ele?.description}</TableCell>
									<TableCell>
										<ButtonMenu
											onEditClick={() => handleEditTask(ele)}
											onDeleteClick={() => handleDeleteTask(ele?.id)}
										/>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				) : (
					<Box
						sx={{
							minHeight: '100px',
							minWidth: '250px',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: theme => `dashed 2px ${theme.palette.grey[200]}`,
							borderRadius: theme => `${theme.shape.borderRadius + 4}px`,
						}}
					>
						<Typography variant='caption'>No tasks found</Typography>
					</Box>
				)}
			</Box>
			<Button variant='text' onClick={() => push('/')}>
				New task
			</Button>
		</Box>
	);
}
