import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Layout from './layout';

const useStyles = makeStyles(theme => ({}));

export default function Docs({ components }) {
  const classes = useStyles();

  console.log(components);

  return <Layout>{'Docs'}</Layout>;
}
