import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GastsbyLink } from 'gatsby';

function ALink({ to, ...other }) {
  return <MuiLink href={to} {...other} />;
}

function Link({ to, activeClassName, partiallyActive, ...other }) {
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const file = /\.[0-9a-z]+$/i.test(to);

    if (file) {
      return <ALink href={to} {...other} />;
    }
    return (
      <MuiLink
        component={GastsbyLink}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      />
    );
  }
  return <ALink href={to} {...other} />;
}

export default Link;
