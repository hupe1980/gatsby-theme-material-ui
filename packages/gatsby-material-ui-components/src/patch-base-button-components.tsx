import React from 'react';
import { ButtonBaseProps } from '@mui/material/ButtonBase';

import { GatsbyLink } from './glink';

export interface GatsbyProps {
  to?: string;
}

export default function patchButtonBaseComponent<P extends ButtonBaseProps>(
  BaseButtonComponent: React.ComponentType<P>,
) {
  return React.forwardRef<HTMLButtonElement, P & GatsbyProps>((props, ref) => {
    const { to, ...buttonProps } = props;
    const component = to ? GatsbyLink : `button`;

    return (
      <BaseButtonComponent
        component={component}
        ref={ref}
        to={to}
        {...(buttonProps as P)}
      />
    );
  });
}
