import React from "react";
import { connect } from "react-redux";
import translation from "../translation"
import { setOfferId } from "../actions";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

const styles = {

};



class SelectOfferId extends React.Component {

  state = {
    field: '',
  }

  handleChange = (event) => {
    const {setOfferId} = this.props;
    this.setState({field: event.target.value});
    setOfferId(event.target.value);
  }

    
    render(){
      const {modeAdmin, language, classes} = this.props;
      const {field} = this.state;
      
        return (
          <div>
            {modeAdmin ? 
                <FormControl>
                    <TextField
                      id="id"
                      label={translation.OFFER_ID[language]}
                      defaultValue={field}
                      margin="normal"
                      onChange={this.handleChange}
                      variant="outlined"
                    />
                </FormControl>
            : 
            null}
          </div>          
        );
    }
}

const mapStateToProps = (state) => {
  return {
    modeAdmin: state.modeAdmin,
    language: state.language,
  }
};

const mapDispatchToProps = { setOfferId };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SelectOfferId));