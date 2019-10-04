import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';



export default class PositionedSnackbar extends React.Component {

  state = {
    open: true,
    vertical: 'bottom',
    horizontal: 'center',
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
        const {open, vertical, horizontal} = this.state;
        const {text} = this.props;
       
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
              />
        );
        
    }
}