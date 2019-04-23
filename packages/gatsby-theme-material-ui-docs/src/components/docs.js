import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Layout from './Layout';

const useStyles = makeStyles(theme => ({}));

export default function Docs() {
  const classes = useStyles();

  return <Layout>{'Docs'}</Layout>;
}
