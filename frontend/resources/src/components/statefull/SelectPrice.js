import React from "react";
import { selectedPrice } from "../actions";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class SelectPrice extends React.Component {

  handleChange = (event) => {
    const price = event.target.value;
    this.props.selectedPrice(price);
  }
    render(){
        const {price} = this.props;
        return (
          <div>
        
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    price: state.price,
  }
};
const mapDispatchToProps = { selectedPrice };

export const SelectPriceComponent = connect(mapStateToProps, mapDispatchToProps)(SelectPrice);