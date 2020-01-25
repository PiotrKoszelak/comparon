import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import translation from "../translation"

function Detail  ({
                  language,
                  details, 
                  classes,
                  isLoading
                  }){

      let classForDetails;
      isLoading ? classForDetails=classes.detailsInvisible : classForDetails=classes.detailsVisible;
      const [isPopoverOpen, setIsPopoverOpen] = React.useState(null);
      const [popoverText, setPopoverText] = React.useState('');

      const handlePopoverOpen = (event, text) => {
            setIsPopoverOpen(event.currentTarget);
            setPopoverText(text);
          };
        
          const handlePopoverClose = () => {
            setIsPopoverOpen(null);
          };
        
      const openPopover = Boolean(isPopoverOpen);

      return(
          <ExpansionPanelDetails className={classForDetails}>
                <div className={clsx(classes.column, classes.helper)} style={{flexBasis: '20%'}}>
                  {!isLoading ? 
                        <img src={require(`../img/${details.equipment}.jpg`)} alt={`${details.equipment}`} className={classes.equipment} ></img>
                        : null
                  }
                </div>
                <div className={classes.column} style={{flexBasis: '12%', alignItems: 'flex-end', marginLeft: 5}}>
                      <Typography className={classes.desc} >
                      {!isLoading ? `${details.equipment}` : null} 
                      </Typography>
                </div>
                <div className={classes.column} style={{flexBasis: '20%'}}>
                        <PaymentIcon 
                              className={classes.icon} 
                              onMouseEnter={(e) => handlePopoverOpen(e, `${translation.DELIVERY_COST[language]}`)}
                              onMouseLeave={handlePopoverClose}
                        />
                        <Typography className={classes.desc} >
                      {!isLoading ? `${details.delivery_time} h` : null}
                      </Typography>
                </div>
                <div className={classes.column} style={{flexBasis: '20%'}}>
                        <LocalShippingIcon 
                              className={classes.icon} 
                              onMouseEnter={(e) => handlePopoverOpen(e, `${translation.DELIVERY_TIME[language]}`)}
                              onMouseLeave={handlePopoverClose}
                        />
                        <Typography className={classes.desc} >
                      {!isLoading ? `${details.delivery_cost} zł` : null} 
                      </Typography>
                </div>

            <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                  paper: classes.paper,
                  }}
                  open={openPopover}
                  anchorEl={isPopoverOpen}
                  anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                  }}
                  transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                  >
                  <Typography>{popoverText}</Typography>
            </Popover>

          </ExpansionPanelDetails>
    )};

Detail.propTypes = {
  details: PropTypes.object,
  language: PropTypes.string,
};
export default Detail;