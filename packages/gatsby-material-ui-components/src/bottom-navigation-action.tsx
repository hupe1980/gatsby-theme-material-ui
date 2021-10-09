import MuiBottomNavigationAction, {
  BottomNavigationActionProps,
} from '@material-ui/core/BottomNavigationAction';

import patchButtonBaseComponent from './patch-base-button-components';

export const BottomNavigationAction =
  patchButtonBaseComponent<BottomNavigationActionProps>(
    MuiBottomNavigationAction,
  );
