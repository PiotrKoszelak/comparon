import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import translation from "../translation"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';
import MenuList from '../stateless/MenuList';
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
            <div className={classes.button} style={title==='PolicyPrivacy' ? {color: `${colors.primaryColor}`} : {}} >{translation.POLICY_PRIVACY[language]}</div>
          </Link>
          <Link to="/termsofuse" className={classes.link} >
            <div className={classes.button} style={title==='TermsOfUse' ? {color: `${colors.primaryColor}`} : {}} >{translation.TERMS_OF_USE[language]}</div>
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

  render() {
    const {classes, language, title, offersToCompare} = this.props;
    return(
        <div className={classes.toolbar} >
            <CookiesInfo language={language} />
            <Link to="/" className={classes.link} >
                <img className={classes.logo} src={require(`../img/logo_jpg_200x100.jpg`)} alt='home' />
            </Link>
            <div className={classes.buttonContainer}>
                <Link to="/offers" className={classes.link} >
                        <div className={classes.button} style={title==='Offers' ? {color: `${colors.primaryColor}`} : {}} >{`${translation.OFFERS[language]}`}</div>
                </Link>
                <Badge color="secondary" style={{marginRight: 10}} badgeContent={offersToCompare.length} >
                    <Link to="/offers/compare" className={classes.link}>
                        <div className={classes.button} style={title==='Compare' ? {color: `${colors.primaryColor}`} : {}} >{`${translation.COMPARE[language]}`}</div>
                    </Link>
                </Badge>
                <Link to="/contact" className={classes.link} >
                        <div className={classes.button} style={title==='Contact' ? {color: `${colors.primaryColor}`} : {}} >{`${translation.CONTACT[language]}`}</div>
                </Link>
                <Link className={classes.link} >
                        <div className={classes.button} >{`${translation.LOGIN[language]}`}</div>
                </Link>
            </div>
            <MenuList classes={classes} language={language} title={title} />

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
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleClick}
          style={{fontSize:10, padding:5, paddingRight:10}}
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