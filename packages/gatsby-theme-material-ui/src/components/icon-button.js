import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';

import GatsbyLink from './gatsby-link';

function IconButton(props) {
  const { to, href } = props;
  const component = to || href ? GatsbyLink : 'button';

  return <MuiIconButton component={component} {...props} />;
}

export default IconButton;
