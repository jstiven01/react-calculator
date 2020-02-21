import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import Card from '@material-ui/core/Card'; import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

function Display({ result }) {
  const props = useSpring({
    opacity: 1, from: { opacity: 0 }, duration: 10000, delay: 1000,
  });
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.root} id="display">
        <Typography variant="h2"><animated.span style={props}>{result}</animated.span></Typography>
      </div>
    </Card>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};


export default Display;
