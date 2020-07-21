import React from 'react';
import MuiLink, { LinkProps } from '@material-ui/core/Link';

import { GatsbyLink } from './glink';

export const Link: React.FC<LinkProps & { to?: string }> = (props) => {
  const { to } = props;
  return to ? (
    <MuiLink component={GatsbyLink} {...props} to={to} />
  ) : (
    <MuiLink {...props} />
  );
};
