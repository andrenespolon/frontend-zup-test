import { type ThemeOptions } from '@mui/material';

export const components: Partial<ThemeOptions['components']> = {
	MuiAutocomplete: {
		defaultProps: {
			size: 'small',
		},
		styleOverrides: {
			endAdornment: {
				top: 'calc(50% - 16px)',
				right: 4,
			},
			inputRoot: {
				paddingTop: 0,
				paddingBottom: 0,
				paddingLeft: 6,
			},
		},
	},
	MuiButtonBase: {
		defaultProps: {
			disableRipple: true,
			disableTouchRipple: true,
		},
	},
	MuiButton: {
		defaultProps: {
			disableElevation: true,
			variant: 'contained',
			size: 'medium',
		},
		styleOverrides: {
			root: {
				whiteSpace: 'nowrap',
				fontWeight: 600,
				padding: '8px 16px',
			},
			sizeMedium: {
				height: '32px',
			},
			sizeSmall: {
				height: '24px',
			},
		},
	},
	MuiIconButton: {
		defaultProps: {
			size: 'medium',
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderRadius: theme.shape.borderRadius,
			}),
			edgeEnd: {
				height: 32,
				width: 32,
				borderRadius: 0,
			},
			edgeStart: {
				height: 32,
				width: 32,
				borderRadius: 0,
			},
		},
	},
	MuiCheckbox: {
		defaultProps: {
			disableRipple: true,
			size: 'small',
		},
		styleOverrides: {
			root: {
				transform: 'scale(0.8)',
			},
		},
	},
	MuiFab: {
		defaultProps: {
			size: 'small',
		},
	},
	MuiFormControl: {
		defaultProps: {
			margin: 'dense',
			size: 'small',
		},
	},
	MuiFormLabel: {
		styleOverrides: {
			root: ({ theme }) => ({
				color: theme.palette.text.secondary,
				'&.Mui-focused': {
					color: theme.palette.text.secondary,
				},
			}),
			asterisk: ({ theme }) => ({
				color: theme.palette.error.main,
			}),
		},
	},
	MuiFormHelperText: {
		defaultProps: {
			margin: 'dense',
		},
		styleOverrides: {
			root: {
				marginLeft: 0,
			},
		},
	},
	MuiInputBase: {
		defaultProps: {
			margin: 'dense',
		},
	},
	MuiInputLabel: {
		defaultProps: {
			margin: 'dense',
			color: 'primary',
			shrink: false,
		},
		styleOverrides: {
			shrink: ({ theme }) => ({
				color: theme.palette.text.secondary,
			}),
			root: ({ theme }) => ({
				color: theme.palette.text.secondary,
				position: 'relative',
				transform: 'none',
				fontSize: '0.7rem',
				fontWeight: 700,
				marginBottom: 4,
			}),
		},
	},
	MuiOutlinedInput: {
		defaultProps: {
			size: 'small',
			margin: 'dense',
		},
		styleOverrides: {
			root: ({ theme }) => ({
				height: '38px',
				padding: 0,
				alignItems: 'center',
				border: 'solid 2px #f2f2f2',
				backgroundColor: '#fcfcfc',
				'& fieldset': {
					border: 'none',
				},
				transition:
					'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s',
				'&:hover:not([aria-disabled])': {
					backgroundColor: theme.palette.action.hover,
				},
				'&:focus-within:not([aria-disabled])': {
					backgroundColor: '#fff',
					borderColor: theme.palette.info.main,
				},
				'&[aria-invalid="true"]:not([aria-disabled]), &[aria-invalid="true"]:not([aria-disabled]):hover':
					{
						borderColor: theme.palette.error.main,
					},
			}),
			input: ({ theme }) => ({
				padding: '8px 6px',
				border: 'none',
				borderRadius: theme.shape.borderRadius,
				verticalAlign: 'middle',
				'&::placeholder': {
					opacity: 1,
					color: theme.palette.action.active,
				},
			}),
			adornedStart: {
				input: {
					padding: '8px 6px 8px 12px',
				},
			},
			adornedEnd: {
				input: {
					padding: '8px 12px 8px 6px',
				},
			},
			multiline: {
				padding: '8px 6px',
				height: 'auto',
			},
			error: ({ theme }) => ({
				borderColor: theme.palette.error.main,
			}),
			disabled: ({ theme }) => ({
				backgroundColor: theme.palette.action.hover,
			}),
		},
	},
	MuiSelect: {
		defaultProps: {
			placeholder: 'Selecione',
			variant: 'outlined',
		},
	},
	MuiTextField: {
		defaultProps: {
			size: 'small',
			margin: 'dense',
			variant: 'outlined',
		},
		styleOverrides: {
			root: ({ theme }) => ({
				marginTop: 0,
				backgroundColor: theme.palette.background.paper,
			}),
		},
	},
	MuiTooltip: {
		defaultProps: {
			arrow: false,
		},
		styleOverrides: {
			tooltip: {
				fontSize: '0.7rem',
			},
		},
	},
	MuiList: {
		defaultProps: {
			dense: true,
		},
	},
	MuiMenuItem: {
		defaultProps: {
			dense: true,
		},
	},
	MuiListItem: {
		defaultProps: {
			dense: true,
		},
	},
	MuiListItemText: {
		defaultProps: {
			primaryTypographyProps: {
				lineHeight: 1.3,
			},
			secondaryTypographyProps: {
				fontSize: '0.75rem',
			},
		},
	},
	MuiListItemButton: {
		defaultProps: {
			dense: false,
		},
	},
	MuiTable: {
		defaultProps: {
			size: 'medium',
		},
	},
	MuiTableHead: {
		defaultProps: {
			sx: {
				fontSize: theme => theme.typography.caption,
				color: theme => theme.palette.grey[200],
				fontWeight: 600,
			},
		},
	},
	MuiTableBody: {
		defaultProps: {
			sx: {
				fontSize: '0.875rem',
			},
		},
	},
	MuiTableCell: {
		defaultProps: {
			sx: {
				fontSize: 'inherit',
				fontWeight: 'inherit',
			},
		},
	},
	MuiAppBar: {
		defaultProps: {
			position: 'relative',
			elevation: 0,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderBottom: 1,
				borderBottomStyle: 'solid',
				borderBottomColor: theme.palette.divider,
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary,
				transition: theme.transitions.easing.sharp,
			}),
		},
	},
	MuiToolbar: {
		defaultProps: {
			variant: 'dense',
			sx: {
				gap: 2,
				justifyContent: 'space-between',
			},
		},
	},
	MuiChip: {
		defaultProps: {
			size: 'small',
		},
		styleOverrides: {
			root: {
				fontSize: '0.75rem',
				fontWeight: 600,
				borderRadius: 3,
				height: '21px',
				padding: '1px',
				verticalAlign: 'baseline',
			},
		},
	},
	MuiDialog: {
		styleOverrides: {
			paper: ({ theme }) => ({
				borderStyle: 'solid',
				borderColor: theme.palette.divider,
				borderWidth: 1,
			}),
		},
	},
	MuiTypography: {
		styleOverrides: {
			root: ({ theme }) => ({
				color: theme.palette.text.primary,
			}),
			caption: ({ theme }) => ({
				color: theme.palette.text.secondary,
			}),
			overline: ({ theme }) => ({
				color: theme.palette.text.secondary,
			}),
		},
	},
};
