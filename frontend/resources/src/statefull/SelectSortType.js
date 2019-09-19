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
        const types = [{value: translation.NONE[language]},{value: translation.PRICE_FROM_LOWEST[language]},{value: translation.PRICE_FROM_HIGHEST[language]},{value: translation.SPEED_FROM_LOWEST[language]},{value: translation.SPEED_FROM_HIGHEST[language]}]
        return (
              <MySelect 
                loaded={true} 
                placeholder={''}
                label= {translation.SORT_BY[language]}
                data={types} 
                value={selectedSortType} 
                handleChange={this.handleChange} 
                language={language}
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