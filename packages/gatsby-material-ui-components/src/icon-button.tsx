import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';

import patchButtonBaseComponent from './patch-base-button-components';

export const IconButton = patchButtonBaseComponent<
  HTMLButtonElement,
  IconButtonProps
>(MuiIconButton);
