import React from 'react';
import MuiCardActionArea from '@material-ui/core/CardActionArea';

import GatsbyLink from './gatsby-link';

function CardActionArea(props) {
  const { to, href } = props;
  const component = to || href ? GatsbyLink : 'button';

  return <MuiCardActionArea component={component} {...props} />;
}

export default CardActionArea;
