import React from 'react';

import { Box, keyframes, lighten, useTheme } from '@mui/material';

import type { SpinnerProps } from './types';

/**
 * Load in animation
 *
 * There are three parts to the load in animation:
 * 1. Fade in
 * 2. Accelerated spin
 * 3. Stretch the spinner line
 */
const loadIn = keyframes({
	from: {
		transform: 'rotate(50deg)',
		opacity: 0,
		strokeDashoffset: 60,
	},
	to: {
		transform: 'rotate(230deg)',
		opacity: 1,
		strokeDashoffset: 50,
	},
});

/**
 * Spin animation
 */
const spin = keyframes({
	to: {
		transform: 'rotate(360deg)',
	},
});

/**
 * __Spinner__
 */
export const Spinner = React.memo<SpinnerProps>(
	({ size = 24, invertColor, isDisabled, testId }) => {
		const { palette } = useTheme();

		const thickness = size < 24 ? size / 8 : 3;
		const primaryColor = invertColor
			? palette.background.paper
			: palette.primary.main;
		const primaryColorDisabled = isDisabled ? palette.text.disabled : undefined;
		const backColor = primaryColorDisabled
			? lighten(primaryColorDisabled, 0.8)
			: lighten(primaryColor, 0.9);

		const defaultPrimaryColor = primaryColorDisabled || primaryColor;
		const defaultBackColor = backColor;

		return (
			<Box
				display='flex'
				justifyContent='center'
				alignItems='center'
				data-testid={testId ? `${testId}--spinner-wrapper` : 'spinner-wrapper'}
			>
				<Box
					display='flex'
					justifyContent='center'
					alignContent='center'
					data-testid={
						testId ? `${testId}--spinner-inner-load` : 'spinner-inner-load'
					}
					sx={{
						animation: `${loadIn} 0.6s ease-in-out`,
						/**
						 * When the animation completes, stay at the last frame of the animation.
						 */
						animationFillMode: 'forwards',
						/**
						 * We are going to animate this in.
						 */
						opacity: 0,
					}}
				>
					<Box
						data-testid={
							testId ? `${testId}--spinner-inner-spin` : 'spinner-inner-spin'
						}
						sx={{
							height: size,
							width: size,
							display: 'inline-block',
							borderRadius: '50%',
							borderStyle: 'solid',
							borderWidth: thickness,
							animation: `${spin} 0.6s infinite linear`,
							transformOrigin: 'center',
							strokeLinecap: 'round',
							borderColor: `
          ${defaultPrimaryColor} 
          ${defaultBackColor} 
          ${defaultBackColor} 
          ${defaultBackColor}`,
						}}
					/>
				</Box>
			</Box>
		);
	}
);
