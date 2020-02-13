import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';
import MenuList from '../stateless/MenuList';
import Login from './Login';
import { Link } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import CookiesInfo from '../stateless/cookies'
import * as colors from "../style/colors";

class MenuBottomButtons extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const {classes, language, title} = this.props;
    return(
        <div className={classes.buttonContainer} >
          <Link to="/policyprivacy" className={classes.link} >
            <div className={classes.button} style={title==='PolicyPrivacy' ? {color: `${colors.primaryColor}`, fontWeight: 700} : {}} >{translation.POLICY_PRIVACY[language]}</div>
          </Link>
          <Link to="/termsofuse" className={classes.link} >
            <div className={classes.button} style={title==='TermsOfUse' ? {color: `${colors.primaryColor}`, fontWeight: 700} : {}} >{translation.TERMS_OF_USE[language]}</div>
          </Link>
        </div>
    );
  }
}



class Menu extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
    offersToCompare: PropTypes.array,
  }

  state = { classForAddToCompare : {display: 'none'},
            numberOfOffersToCompare: 0,
            isLoginOpen: false,
          }

  componentDidMount(){
    const {offersToCompare}  = this.props;
    this.setState({numberOfOffersToCompare: offersToCompare.length})
  }

  componentDidUpdate(prevProps){
    const {offersToCompare, classes}  = this.props;
    const {classForAddToCompare} = this.state;

    if (offersToCompare.length > prevProps.offersToCompare.length){
      this.setState({classForAddToCompare: classes.addToCompare})
      setTimeout(() => {this.setState({numberOfOffersToCompare: offersToCompare.length, classForAddToCompare: {display: 'none'}})}, 2000);
    }
    else if (offersToCompare.length < prevProps.offersToCompare.length){
      this.setState({numberOfOffersToCompare: offersToCompare.length});
    }
  }

  handleLoginWindow = () => {
    const {isLoginOpen} = this.state;
    this.setState({isLoginOpen : !isLoginOpen});
  }

  render() {
    const {classes, language, title} = this.props;
    const {classForAddToCompare, numberOfOffersToCompare, isLoginOpen} = this.state;
    return(
        <div className={classes.toolbar} >
            <CookiesInfo language={language} />
            <Link to="/" className={classes.link} >
                <img className={classes.logo} src={require(`../img/logo_jpg_200x100.jpg`)} alt='home' />
            </Link>
            <div className={classForAddToCompare}></div>
            <div className={classes.buttonContainer}>
                <Link to="/offers" className={classes.link} >
                        <div className={classes.button} style={title==='Offers' ? {color: `${colors.primaryColor}`, fontWeight: 700} : {}} >{`${translation.OFFERS[language]}`}</div>
                </Link>
                <Badge color="error" style={{marginRight: 10}} badgeContent={numberOfOffersToCompare} >
                    <Link to="/offers/compare" className={classes.link}>
                        <div className={classes.button} style={title==='Compare' ? {color: `${colors.primaryColor}`, fontWeight: 700} : {}} >{`${translation.COMPARE[language]}`}</div>
                    </Link>
                </Badge>
                <Link to="/contact" className={classes.link} >
                        <div className={classes.button} style={title==='Contact' ? {color: `${colors.primaryColor}`, fontWeight: 700} : {}} >{`${translation.CONTACT[language]}`}</div>
                </Link>
                <div className={classes.link} onClick={() => this.handleLoginWindow()}>
                        <div className={classes.button} >{`${translation.SIGN_IN[language]}`}</div>
                </div>
            </div>
            <MenuList classes={classes} language={language} title={title} openLogin={() => this.handleLoginWindow()} />
            {isLoginOpen ? <Login isOpen={isLoginOpen} closeLoginWindow={() => this.handleLoginWindow()} language={language} /> : null}

        </div>
    );
  }
}

class ShowCriteriaLabel extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const {classes, language, handleClick} = this.props;
    return(
      <Fab
          variant="extended"
          size="small"
          aria-label="add"
          className={classes.showCriteriaButton}
          onClick={handleClick}
        >
          <ChevronRightIcon className={classes.extendedIcon} />
          {translation.SHOW_CRITERIA[language]}
        </Fab>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    language: state.language,
    offersToCompare: state.offersToCompare,
  }
};
const mapDispatchToProps = {};

export const MenuBottomButtonsComponent = connect(mapStateToProps, mapDispatchToProps)(MenuBottomButtons);
export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(Menu);
export const ShowCriteriaLabelComponent = connect(mapStateToProps, mapDispatchToProps)(ShowCriteriaLabel);