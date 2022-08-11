import MuiButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase';

import patchButtonBaseComponent from './patch-base-button-components';

export const ButtonBase = patchButtonBaseComponent<
  HTMLButtonElement,
  ButtonBaseProps
>(MuiButtonBase);
