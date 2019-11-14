import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default class PositionedSnackbar extends React.Component {

  handleClose = (event, reason) => {
    const {close} = this.props;
    if (reason === 'clickaway') {
      return;
    }
    close(false);
  };


    render(){
        const {text, vertical, horizontal, isOpen} = this.props;
       
        return (
              <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  key={`${vertical},${horizontal}`}
                  open={isOpen}
                  onClose={this.handleClose}
                  ContentProps={{
                    'aria-describedby': 'message-id',
                  }}
                  message={<div id="message-id">{text}</div>}
                  action={[
                    <IconButton key="close" aria-label="close" color="inherit" onClick={this.handleClose}>
                      <CloseIcon />
                    </IconButton>,
                  ]}
              />
        );
        
    }
}