import React, { Component } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';

import GatsbyLink from './gatsby-link';

class CardActionAreaLink extends Component {
  renderLink = React.forwardRef((props, ref) => (
    <GatsbyLink {...props} innerRef={ref} />
  ));

  render() {
    return <CardActionArea component={this.renderLink} {...this.props} />;
  }
}

export default CardActionAreaLink;
