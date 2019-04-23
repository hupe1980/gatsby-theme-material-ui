import React from 'react';
import { Link } from 'gatsby';

function ALink({ to, children, ...other }) {
  return (
    <a href={to} {...other}>
      {children}{' '}
    </a>
  );
}

function GastsbyLink({
  to,
  activeClassName,
  partiallyActive,
  innerRef,
  ...other
}) {
  const internal = /^\/(?!\/)/.test(to);

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    const file = /\.[0-9a-z]+$/i.test(to);

    if (file) {
      return <ALink href={to} {...other} />;
    }
    return (
      <Link
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        innerRef={innerRef}
        {...other}
      />
    );
  }
  return <ALink href={to} {...other} />;
}

export default GastsbyLink;
