import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import translation from "../translation"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NumberOfOffersToCompare from "./NumberOfOffersToCompare"; 
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Fab from '@material-ui/core/Fab';

class MenuBottomButtons extends Component {
  
  static propTypes = {
    language: PropTypes.string.isRequired,
  }

  render() {
    const {classes, language} = this.props;
    return(
        <span>
            <Button color="inherit" className={classes.button} >{translation.POLICY_PRIVACY[language]}</Button>
            <Button color="inherit" className={classes.button} >{translation.TERMS_OF_USE[language]}</Button>
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
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {title==='Offers' ? translation.OFFERS[language] : null}
                    {title==='About' ? translation.ABOUT[language] : null}
                </Typography>
            </span>
            <span>
                <Button color="inherit" className={classes.button} >{`${translation.COMPARE[language]} (`}<NumberOfOffersToCompare />{`)`}</Button>
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
          color="primary"
          aria-label="show"
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