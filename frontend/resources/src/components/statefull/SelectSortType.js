import React from "react";
import MySelect from "../stateless/Select";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class SelectSortType extends React.Component {

  state = {
    selectedSortType : '',
  }


  handleChange = (event) => {
    const sortType = event.target.value;
    this.setState({selectedSortType : sortType})
  }

    
    render(){
        const {selectedSortType} = this.state;
        const types = [{value: 'Brak'},{value: 'Cena od najmniejszej'},{value: 'Cena od największej'},{value: 'Szybkość od najmniejszej'},{value: 'Szybkość od największej'}]
        return (
              <MySelect 
                loaded={true} 
                placeholder={'ok'}
                label='Sortuj wg' 
                data={types} 
                value={selectedSortType} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
 
  }
};
const mapDispatchToProps = {};

export const SelectSortTypeComponent = connect(mapStateToProps, mapDispatchToProps)(SelectSortType);