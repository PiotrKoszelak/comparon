import React from "react";
import { connect } from "react-redux";



class SelectOfferId extends React.Component {

    
    render(){
      const {modeAdmin} = this.props;
      
        return (
          <div>
            {modeAdmin ? 
                <p>{'admin'}</p>
            : 
            null}
          </div>          
        );
    }
}

const mapStateToProps = (state) => {
  return {
    modeAdmin: state.modeAdmin,
  }
};

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(SelectOfferId);