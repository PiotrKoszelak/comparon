import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  offer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  subtitle: {
    fontFamily: 'Lato',
  }
});

function Detail  ({closeDetailWindow, offerPrice, offerOperator, offerPeriod, offerSpeed, offerType}){

  const classes = useStyles();

    return(
          <Dialog
            open={true}
            TransitionComponent={Transition}
            onClose={closeDetailWindow}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Szczegóły oferty"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <p>Koszt miesięczny: {offerPrice}</p>
                <p>Operator: {offerOperator}</p>
                <p>Okres trwania umowy: {offerPeriod}</p>
                <p>Prędkość: {offerSpeed}</p>
                <p>Typ internetu: {offerType}</p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDetailWindow} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
  )};

Detail.propTypes = {
  closeDetailWindow : PropTypes.func.isRequired,
  offerPrice: PropTypes.number.isRequired,
  offerOperator: PropTypes.string.isRequired,
  offerPeriod: PropTypes.string.isRequired,
  offerSpeed: PropTypes.number.isRequired,
  offerType: PropTypes.string.isRequired,
};
export default Detail;