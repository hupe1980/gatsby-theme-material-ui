import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';

import GatsbyLink from './gatsby-link';

class IconButtonLink extends Component {
  renderLink = React.forwardRef((props, ref) => (
    <GatsbyLink {...props} innerRef={ref} />
  ));

  render() {
    return <IconButton component={this.renderLink} {...this.props} />;
  }
}

export default IconButtonLink;
