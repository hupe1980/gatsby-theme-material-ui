import MuiButton, { ButtonProps } from '@mui/material/Button';

import patchButtonBaseComponent from './patch-base-button-components';

export const Button = patchButtonBaseComponent<ButtonProps>(MuiButton);
