import React from 'react';
import MuiLink from '@material-ui/core/Link';

import GastsbyLink from './GatsbyLink';

function Link({ ...props }) {
  return <MuiLink component={GastsbyLink} {...props} />;
}

export default Link;
