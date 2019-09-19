import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import translation from "../translation"
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NumberOfOffersToCompare from "./NumberOfOffersToCompare"; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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
    const {classes, language, checked, handleChange} = this.props;
    return(
      <FormControlLabel
          className={classes.label}
          control={<Switch 
                  checked={checked} 
                  onChange={handleChange}
                  size="small"
                  />}
          label={translation.SHOW_CRITERIA[language]}
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

export const MenuBottomButtonsComponent = connect(mapStateToProps, mapDispatchToProps)(MenuBottomButtons);
export const MenuComponent = connect(mapStateToProps, mapDispatchToProps)(Menu);
export const ShowCriteriaLabelComponent = connect(mapStateToProps, mapDispatchToProps)(ShowCriteriaLabel);