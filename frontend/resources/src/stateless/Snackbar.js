import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default class PositionedSnackbar extends React.Component {

  state = {
    open: true,
  }

  componentDidUpdate(prevProps) {
    const {selectedOffer} = this.props;
    if (selectedOffer){
      if (selectedOffer !== prevProps.selectedOffer){
        this.setState({open: true});
      }
    }
  }

  handleClose = () => {
    this.setState({open: false });
  };


    render(){
        const {open} = this.state;
        const {text, vertical, horizontal} = this.props;
       
        return (
              <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  key={`${vertical},${horizontal}`}
                  open={open}
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