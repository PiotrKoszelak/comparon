import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import translation from "../translation"
import Typography from '@material-ui/core/Typography';
import NumberOfOffersToCompare from "./NumberOfOffersToCompare"; 
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';
import MenuList from '../stateless/MenuList';
import { Link } from 'react-router-dom'

class MenuBottomButtons extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const {classes, language} = this.props;
    return(
        <span>
          <Link to="/policyprivacy" style={{textDecoration: 'none', color: 'white'}}>
            <Button color="inherit" className={classes.button} >{translation.POLICY_PRIVACY[language]}</Button>
          </Link>
          <Link to="/termsofuse" style={{textDecoration: 'none', color: 'white'}}>
            <Button color="inherit" className={classes.button} >{translation.TERMS_OF_USE[language]}</Button>
          </Link>
        </span>
    );
  }
}



class Menu extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const {classes, title, language} = this.props;
    return(
        <span className={classes.toolbar} >
            <span style={{display: 'flex', alignItems: 'center'}}>
                <MenuList classes={classes} language={language} />
                <Typography variant="subtitle2" className={classes.title}>
                    {title==='Offers' ? translation.OFFERS[language] : null}
                    {title==='About' ? translation.ABOUT[language] : null}
                    {title==='Contact' ? translation.CONTACT[language] : null}
                    {title==='TermsOfUse' ? translation.TERMS_OF_USE[language] : null}
                    {title==='PolicyPrivacy' ? translation.POLICY_PRIVACY[language] : null}
                    {title==='Compare' ? translation.COMPARE[language] : null}
                </Typography>
            </span>
            <span>
                <Link to="/offers/compare" style={{textDecoration: 'none', color: 'white'}}>
                    <Button color="inherit" className={classes.button} >{`${translation.COMPARE[language]} (`}<NumberOfOffersToCompare />{`)`}</Button>
                </Link>
                <Button color="inherit" className={classes.button} >{translation.LOGIN[language]}</Button>
            </span>
        </span>
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
  }
};
const mapDispatchToProps = {};

export const MenuBottomButtonsComponent = connect(mapStateToProps, mapDispatchToProps)(MenuBottomButtons);
export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(Menu);
export const ShowCriteriaLabelComponent = connect(mapStateToProps, mapDispatchToProps)(ShowCriteriaLabel);