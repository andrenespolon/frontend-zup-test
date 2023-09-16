import React from 'react';

import { TaskContext } from '@contexts/TaskContext';

export function useTask() {
	return React.useContext(TaskContext);
}
