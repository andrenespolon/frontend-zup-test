/**
 * Task Status
 */
export type TaskStatus = 'todo' | 'doing' | 'complete';

/**
 * Task
 */
export interface Task {
	id: string;
	title: string;
	description: string;
	status: TaskStatus;
	createdAt?: string;
	updatedAt?: string;
}

/**
 * Task Payload
 */
export type TaskPayload = Partial<Task>;
