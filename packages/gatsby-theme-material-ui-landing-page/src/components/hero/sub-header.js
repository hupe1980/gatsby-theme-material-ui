import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Header({ children }) {
  return (
    <Typography color="inherit" align="center" variant="h1">
      {children}
    </Typography>
  );
}
