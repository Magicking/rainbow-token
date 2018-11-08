import React from 'react';

/* Styles */
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  btn: {
    marginTop: '1.5em'
  }
})


const StartPlayingButton = ({
  classes,
  onClick,
  txInProgress,
  locked
}) => (
  <Button
    className={classes.btn}
    variant='contained'
    color='primary'
    onClick={onClick}
    disabled={txInProgress || locked}
  >
    Start playing
  </Button>
)

export default withStyles(styles)(StartPlayingButton);