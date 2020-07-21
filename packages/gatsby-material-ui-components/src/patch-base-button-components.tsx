import React from 'react';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';

import { GatsbyLink } from './glink';

export interface GatsbyProps {
  to?: string;
}

export default function patchButtonBaseComponent<P extends ButtonBaseProps>(
  BaseButtonComponent: React.ComponentType<P>
) {
  return React.forwardRef<React.Ref<unknown>, P & GatsbyProps>((props, ref) => {
    const { to, ...buttonProps } = props;
    const component = to ? GatsbyLink : `button`;

    return <BaseButtonComponent component={component} ref={ref} to={to} {...(buttonProps as P)} />;
  });
}
