import MuiIconButton, { IconButtonProps } from '@material-ui/core/IconButton';

import patchButtonBaseComponent from './patch-base-button-components';

export const IconButton =
  patchButtonBaseComponent<IconButtonProps>(MuiIconButton);
