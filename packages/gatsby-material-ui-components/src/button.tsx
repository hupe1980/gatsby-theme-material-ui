import MuiButton, { ButtonProps } from "@material-ui/core/Button";

import patchButtonBaseComponent from "./patch-base-button-components";

export const Button = patchButtonBaseComponent<ButtonProps>(MuiButton);
