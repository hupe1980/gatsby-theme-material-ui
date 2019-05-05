import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

function ALink({ to, children, ...other }) {
  return (
    <a href={to} {...other}>
      {children}{' '}
    </a>
  );
}

const Link = React.forwardRef(function Link(
  { to, activeClassName, partiallyActive, ...other },
  ref
) {
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const file = /\.[0-9a-z]+$/i.test(to);

    if (file) {
      return <ALink href={to} {...other} />;
    }
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        innerRef={ref}
        {...other}
      />
    );
  }
  return <ALink href={to} {...other} />;
});

export default Link;
