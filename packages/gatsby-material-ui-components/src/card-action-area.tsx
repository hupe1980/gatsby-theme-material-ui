import MuiCardActionArea, {
  CardActionAreaProps,
} from '@mui/material/CardActionArea';

import patchButtonBaseComponent from './patch-base-button-components';

export const CardActionArea = patchButtonBaseComponent<
  HTMLButtonElement,
  CardActionAreaProps
>(MuiCardActionArea);
