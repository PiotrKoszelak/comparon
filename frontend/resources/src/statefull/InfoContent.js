import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AboutContent from "../stateless/About";
import ContactContent from "../stateless/Contact";
import PolicyPrivacyContent from "../stateless/PolicyPrivacy";
import TermsOfUseContent from "../stateless/TermsOfUse";

class InfoContent extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const { language, title } = this.props;
    return(
        <div>
          {title==='About' ? <AboutContent language={language} /> : null}
          {title==='Contact' ? <ContactContent language={language} /> : null}
          {title==='TermsOfUse' ? <TermsOfUseContent language={language} /> : null}
          {title==='PolicyPrivacy' ? <PolicyPrivacyContent language={language} /> : null}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language,
  }
};
const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(InfoContent);