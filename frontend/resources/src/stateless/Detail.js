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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  title: {
    width: 400,
    display: 'flex',
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: 'Lato',
  }
});

function Detail  ({loadedDetail, 
                  placeholderDetail, 
                  details, 
                  loadedContact, 
                  placeholderContact, 
                  contact, 
                  closeDetailWindow, 
                  offerPrice, 
                  offerOperator, 
                  offerPeriod, 
                  offerSpeed, 
                  offerType}){

  const classes = useStyles();

    return(
          <Dialog
            open={true}
            TransitionComponent={Transition}
            onClose={closeDetailWindow}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className={classes.title} id="alert-dialog-slide-title">{"Szczegóły oferty"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                <Table>
                  <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">Koszt miesięczny</TableCell>
                          <TableCell align="right"> {offerPrice} </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">Operator</TableCell>
                          <TableCell align="right"> {offerOperator} </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">Okres trwania umowy</TableCell>
                          <TableCell align="right"> {offerPeriod} </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">Prędkość</TableCell>
                          <TableCell align="right"> {offerSpeed} </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell component="th" scope="row">Typ internetu</TableCell>
                          <TableCell align="right"> {offerType} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Czas podłączenia</TableCell>
                            <TableCell align="right"> {loadedDetail===true ? details.delivery_time : placeholderDetail} </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Koszt podłączenia</TableCell>
                            <TableCell align="right"> {loadedDetail===true ? details.delivery_cost : placeholderDetail}  </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row"><b>Numer kontaktowy</b></TableCell>
                            <TableCell align="right"><b>{loadedContact===true ? contact : placeholderContact }</b></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDetailWindow} color="primary">
                Zamknij
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
  detail: PropTypes.object.isRequired,
  loadedDetail: PropTypes.string.isRequired,
  placeholderDetail: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  loadedContact: PropTypes.string.isRequired,
  placeholderContact: PropTypes.string.isRequired,
};
export default Detail;