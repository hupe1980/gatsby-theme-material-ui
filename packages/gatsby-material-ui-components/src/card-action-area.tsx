import MuiCardActionArea, {
  CardActionAreaProps,
} from '@material-ui/core/CardActionArea';

import patchButtonBaseComponent from './patch-base-button-components';

export const CardActionArea =
  patchButtonBaseComponent<CardActionAreaProps>(MuiCardActionArea);
