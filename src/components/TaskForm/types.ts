import type { TaskPayload } from 'types/Task';

/**
 * __Task Form Props__
 */
export type TaskFormProps = {
	testId?: string;
	isLoading?: boolean;
	isFetching?: boolean;
	isEditMode?: boolean;
	values?: TaskPayload;
	onClose?: () => void;
	onSubmit?: (task?: TaskPayload) => void | Promise<void>;
};
