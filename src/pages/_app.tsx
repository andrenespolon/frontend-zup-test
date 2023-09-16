import '@styles/globals.css';

import React from 'react';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CheckCircle, Error } from '@mui/icons-material';
import { AppBar, Box, Button, ThemeProvider, Toolbar } from '@mui/material';
import { theme } from '@styles/theme';
import { TaskProvider } from 'src/contexts/TaskContext';

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter();
	return (
		<TaskProvider>
			<Toaster
				toastOptions={{
					duration: 8000,
					position: 'top-right',
					style: {
						fontSize: '0.875rem',
						borderRadius: `${theme.shape.borderRadius}px`,
					},
					success: {
						icon: <CheckCircle color='success' fontSize='small' />,
					},
					error: {
						icon: <Error color='error' fontSize='small' />,
					},
				}}
			/>
			<ThemeProvider theme={theme}>
				<Box>
					<AppBar
						position='static'
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2,
						}}
					>
						<Toolbar>
							<Link href='/'>
								<Button variant={pathname.endsWith('/') ? 'contained' : 'text'}>
									Home
								</Button>
							</Link>
							<Link href='/tasks'>
								<Button
									variant={pathname.includes('/tasks') ? 'contained' : 'text'}
								>
									Tasks
								</Button>
							</Link>
						</Toolbar>
					</AppBar>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							padding: 3,
							flexGrow: 1,
							gap: 1,
						}}
					>
						<Component {...pageProps} />
					</Box>
				</Box>
			</ThemeProvider>
		</TaskProvider>
	);
}
