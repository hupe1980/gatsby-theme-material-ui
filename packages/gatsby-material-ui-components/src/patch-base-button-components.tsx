import React from 'react';

import { GatsbyLink } from './glink';

export interface GatsbyProps {
  to?: string;
}

export default function patchButtonBaseComponent<E, P>(
  BaseButtonComponent: React.ComponentType<P>,
) {
  return React.forwardRef<E, P & GatsbyProps>((props, ref) => {
    const { to, ...buttonProps } = props;
    const component = to ? GatsbyLink : undefined;

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
