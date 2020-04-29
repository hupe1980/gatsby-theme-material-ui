import React from 'react';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';

import { GatsbyLink } from './glink';

export interface GatsbyProps {
  to?: string;
}

export default function patchButtonBaseComponent<P extends ButtonBaseProps>(
  BaseButtonComponent: React.ComponentType<P>
): React.FC<P & GatsbyProps> {
  return (props: P & GatsbyProps) => {
    const { to } = props;
    const component = to ? GatsbyLink : `button`;

    return <BaseButtonComponent component={component} {...(props as P)} />;
  };
}
