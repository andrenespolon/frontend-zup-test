import React from 'react';

import { MoreHoriz } from '@mui/icons-material';
import {
	Divider,
	IconButton,
	ListItemText,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';

import type { ButtonMenuProps } from './types';

/**
 * __Button Menu__
 */
export const ButtonMenu = React.memo<ButtonMenuProps>(
	({ onEditClick, onDeleteClick, testId }) => {
		const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

		const isOpen = Boolean(anchorEl);

		/**
		 * Handl open menu
		 */
		const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
			setAnchorEl(event.currentTarget);
		};

		return (
			<React.Fragment>
				<Tooltip title='Settings'>
					<IconButton size='small' onClick={handleOpenMenu}>
						<MoreHoriz fontSize='inherit' />
					</IconButton>
				</Tooltip>
				<Menu
					data-testid={testId ? `${testId}--menu` : 'menu'}
					open={isOpen}
					elevation={1}
					anchorEl={anchorEl}
					onClose={() => setAnchorEl(null)}
					onClick={() => setAnchorEl(null)}
				>
					<MenuItem
						onClick={onEditClick}
						data-testid={
							testId ? `${testId}--menu-item-edit` : 'menu-item-edit'
						}
					>
						<ListItemText primary='Edit' />
					</MenuItem>
					<Divider />
					<MenuItem
						key='delete'
						onClick={onDeleteClick}
						data-testid={
							testId ? `${testId}--menu-item-delete` : 'menu-item-delete'
						}
					>
						<ListItemText
							primary={<Typography color='error'>Delete</Typography>}
						/>
					</MenuItem>
				</Menu>
			</React.Fragment>
		);
	}
);
