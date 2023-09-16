/* eslint-disable no-promise-executor-return */
import React from 'react';
import toast from 'react-hot-toast';

import type { TaskPayload } from 'types/Task';

/**
 * Task Contest
 */
export type TaskContextProps = {
	isLoading: boolean;
	isFetching: boolean;
	tasks: TaskPayload[];
	getTaskById: (taskId: string) => Promise<TaskPayload | undefined>;
	createNewTask: (task: TaskPayload) => Promise<boolean>;
	updateTask: (task: TaskPayload) => Promise<boolean>;
	deleteTask: (taskId: string) => Promise<boolean>;
};

/**
 * Task Provider Props
 */
export type TaskProviderProps = {
	children: React.ReactNode;
};

const sleep = (time: number) =>
	new Promise(resolve => setTimeout(resolve, time));

/**
 * __Task Context__
 */
export const TaskContext = React.createContext({} as TaskContextProps);

/**
 * __Task Provider__
 */
export function TaskProvider({ children }: TaskProviderProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [isFetching, setIsFetching] = React.useState<boolean>(false);
	const [tasks, setTasks] = React.useState<TaskPayload[]>([]);

	/**
	 * Get task
	 */
	const getTaskById = React.useCallback(
		async (taskId: string): Promise<TaskPayload | undefined> => {
			try {
				setIsLoading(true);
				/**
				 * Fake promise
				 */
				await sleep(1500);
				const task = tasks.find(ele => ele?.id === taskId);
				return task;
			} catch (error) {
				toast.error('Ops! Somethig is wrong. Please, try again.');
				return {};
			} finally {
				setIsLoading(false);
			}
		},
		[tasks]
	);

	/**
	 * Create task
	 */
	const createNewTask = React.useCallback(
		async (task: TaskPayload): Promise<boolean> => {
			try {
				setIsFetching(true);
				/**
				 * Fake promise
				 */
				await sleep(1500);
				setTasks(prev => [...prev, task]);
				toast.success('Everthing is good! Task success created.');
				return true;
			} catch (error) {
				toast.error('Ops! Somethig is wrong. Please, try again.');
				return false;
			} finally {
				setIsFetching(false);
			}
		},
		[]
	);

	/**
	 * Update task
	 */
	const updateTask = React.useCallback(
		async (task: TaskPayload) => {
			try {
				setIsFetching(true);
				/**
				 * Fake promise
				 */
				await sleep(1500);
				const newTasks = tasks.map(ele => (ele?.id === task?.id ? task : ele));
				setTasks(newTasks);
				toast.success('The task is shining! Task success updated.');
				return true;
			} catch (error) {
				toast.error('Ops! Somethig is wrong. Please, try again.');
				return false;
			} finally {
				setIsFetching(false);
			}
		},
		[tasks]
	);

	/**
	 * Delete task
	 */
	const deleteTask = React.useCallback(
		async (taskId: string) => {
			try {
				const newTasks = tasks.filter(ele => ele?.id !== taskId);
				setTasks(newTasks);
				toast.success('The task is gone! Task success deleted.');
				return true;
			} catch (error) {
				toast.error('Ops! Somethig is wrong. Please, try again.');
				return false;
			}
		},
		[tasks]
	);

	return (
		<TaskContext.Provider
			value={{
				isLoading,
				isFetching,
				tasks,
				getTaskById,
				createNewTask,
				updateTask,
				deleteTask,
			}}
		>
			{children}
		</TaskContext.Provider>
	);
}
