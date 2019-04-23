import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Counter({ count, increment }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="body2" color="textSecondary" align="center">
        Count: {count}
      </Typography>
      <Button color="primary" onClick={increment}>
        Increment
      </Button>
    </Box>
  );
}

const mapStateToProps = ({ count }) => {
  return { count };
};

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
