import MuiBottomNavigationAction, {
  BottomNavigationActionProps,
} from '@mui/material/BottomNavigationAction';

import patchButtonBaseComponent from './patch-base-button-components';

export const BottomNavigationAction = patchButtonBaseComponent<
  HTMLButtonElement,
  BottomNavigationActionProps
>(MuiBottomNavigationAction);
