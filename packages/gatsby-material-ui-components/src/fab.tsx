import MuiFab, { FabProps } from '@mui/material/Fab';

import patchButtonBaseComponent from './patch-base-button-components';

export const Fab = patchButtonBaseComponent<FabProps>(MuiFab);
