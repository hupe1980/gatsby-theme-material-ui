import MuiListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';

import patchButtonBaseComponent from './patch-base-button-components';

export const ListItemButton = patchButtonBaseComponent<
  HTMLDivElement,
  ListItemButtonProps
>(MuiListItemButton);
