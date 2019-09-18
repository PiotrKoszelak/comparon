import React from "react";
import MySelect from "../stateless/Select";
import { connect } from "react-redux";
import translation from "../translation"

class SelectSortType extends React.Component {

  state = {
    selectedSortType : [],
  }


  handleChange = (event) => {
    const sortType = event.target.value;
    this.setState({selectedSortType : [sortType]})
  }

    
    render(){
        const {language} = this.props;
        const {selectedSortType} = this.state;
        const types = [{value: 'Brak'},{value: 'Cena od najmniejszej'},{value: 'Cena od największej'},{value: 'Szybkość od najmniejszej'},{value: 'Szybkość od największej'}]
        return (
              <MySelect 
                loaded={true} 
                placeholder={'ok'}
                label= {translation.SORT_BY[language]}
                data={types} 
                value={selectedSortType} 
                handleChange={this.handleChange} 
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  }
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SelectSortType);