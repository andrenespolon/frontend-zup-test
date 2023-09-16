import { createTheme, responsiveFontSizes } from '@mui/material';
import type { Theme } from '@mui/material';
import { components } from '@styles/components';
import { palette } from '@styles/palette';
import { shape } from '@styles/shape';
import { typography } from '@styles/typography';

const defaultTheme: Theme = createTheme({
	components,
	palette,
	shape,
	typography,
});

export const theme = responsiveFontSizes(defaultTheme);
