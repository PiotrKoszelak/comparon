import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CompareArrowsOutlinedIcon from '@material-ui/icons/CompareArrowsOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import translation from "../translation"
import { Link } from 'react-router-dom'
import * as colors from "../style/colors";

const StyledMenu = withStyles({
  paper: {
    border: `1px solid ${colors.secondaryColor}`,
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    '&:focus': {
      backgroundColor: `${colors.secondaryColor}`,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: `${colors.white}`,
      },
    },
  },
}))(MenuItem);

export default function MenuList({classes, language, title}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.buttonContainerMobile}>
      <IconButton
        edge="start" 
        aria-label="menu"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/offers" style={{textDecoration: 'none'}}>
          <StyledMenuItem>
            <ListItemIcon>
              <LocalOfferOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={translation.OFFERS[language]} style={title==='Offers' ? {color: `${colors.primaryColor}`} : {color: `${colors.secondaryColor}`}}/>
          </StyledMenuItem>
        </Link>
        <Link to="/offers/compare" style={{textDecoration: 'none'}}>
          <StyledMenuItem>
            <ListItemIcon>
              <CompareArrowsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={translation.COMPARE[language]} style={title==='Compare' ? {color: `${colors.primaryColor}`} : {color: `${colors.secondaryColor}`}}/>
          </StyledMenuItem>
        </Link>
        <Link to="/contact" style={{textDecoration: 'none'}}>
          <StyledMenuItem>
            <ListItemIcon>
              <ContactsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={translation.CONTACT[language]}  style={title==='Contact' ? {color: `${colors.primaryColor}`} : {color: `${colors.secondaryColor}`}}/>
          </StyledMenuItem>
        </Link>
        <Link to='' style={{textDecoration: 'none'}}>
          <StyledMenuItem>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={translation.LOGIN[language]}  style={title==='LogIn' ? {color: `${colors.primaryColor}`} : {color: `${colors.secondaryColor}`}}/>
          </StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}