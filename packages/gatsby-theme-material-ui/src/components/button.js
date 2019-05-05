import React from 'react';
import MuiButton from '@material-ui/core/Button';

import GatsbyLink from './gatsby-link';

function Button(props) {
  const { to, href } = props;
  const component = to || href ? GatsbyLink : 'button';

  return <MuiButton component={component} {...props} />;
}

export default Button;
