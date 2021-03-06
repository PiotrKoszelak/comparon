import React from "react";
import { SingleSelect } from "../stateless/Select";
import { connect } from "react-redux";
import translation from "../translation"
import { setSortType } from "../actions";

class SelectSortType extends React.Component {

  handleChange = (event) => {
    const sortType = event.target.value;
    this.props.setSortType(sortType);
  }

    
    render(){
        const {language, sortType} = this.props;
        const sortTypes = {isLoading: false, success: true, error: null, data: [
                       {id: 1, value: translation.PRICE_FROM_LOWEST[language]},
                       {id: 2, value: translation.PRICE_FROM_HIGHEST[language]},
                       {id: 3, value: translation.SPEED_FROM_LOWEST[language]},
                       {id: 4, value: translation.SPEED_FROM_HIGHEST[language]}
                      ]};
        return (
              <SingleSelect 
                label= {translation.SORT_BY[language]}
                data={sortTypes} 
                value={[sortType]} 
                handleChange={this.handleChange} 
                language={language}
              />
        );
    }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
    sortType: state.sortType,
  }
};
const mapDispatchToProps = {
  setSortType
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectSortType);