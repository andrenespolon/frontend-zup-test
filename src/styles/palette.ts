import type { ThemeOptions } from '@mui/material';

export const palette: Partial<ThemeOptions['palette']> = {
	primary: {
		main: '#0052CC',
	},
	secondary: {
		main: '#0065FF',
	},
	error: {
		main: '#ff5555',
		contrastText: '#fff',
	},
	success: {
		main: '#00875a',
		contrastText: '#fff',
	},
	warning: {
		main: '#ff9800',
		contrastText: '#fff',
	},
	info: {
		main: '#1890ff',
		contrastText: '#fff',
	},
	text: {
		primary: 'rgba(0, 0, 0, 0.8)',
	},
	background: {
		default: '#fdfdfd',
		paper: '#fff',
	},
};
