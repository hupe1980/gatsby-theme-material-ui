import MuiFab, { FabProps } from "@material-ui/core/Fab";

import patchButtonBaseComponent from "./patch-base-button-components";

export const Fab = patchButtonBaseComponent<FabProps>(MuiFab);
