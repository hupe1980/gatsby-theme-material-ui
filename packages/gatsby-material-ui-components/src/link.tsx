import React from 'react';
import MuiLink, { LinkProps } from '@material-ui/core/Link';

import { GatsbyLink } from './glink';

export const Link = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & { to?: string }
>((props, ref) => {
  const { to } = props;
  return to ? (
    <MuiLink ref={ref} component={GatsbyLink} to={to} {...props} />
  ) : (
    <MuiLink ref={ref} {...props} />
  );
});
