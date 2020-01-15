import React from "react";
import PropTypes from "prop-types";
import clsx from 'clsx';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import PaymentIcon from '@material-ui/icons/Payment';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

function Detail  ({
                  language,
                  details, 
                  classes
                  }){

      return(
          <ExpansionPanelDetails className={classes.details}>
                <div className={classes.column} />
                <div className={classes.column}>
                  <Chip label="Barbados" onDelete={() => {}} />
                </div>
                <div className={clsx(classes.column, classes.helper)}>
                      <PaymentIcon className={classes.icon} />
                      <Typography variant="subtitle1">
                      {`${details.delivery_time} h`} 
                      </Typography>
                </div>
                <div className={classes.column}>
                      <LocalShippingIcon className={classes.icon} />
                      <Typography variant="subtitle1">
                      {`${details.delivery_cost} zł`} 
                      </Typography>
                </div>
          </ExpansionPanelDetails>
    )};

Detail.propTypes = {
  details: PropTypes.object,
  language: PropTypes.string,
};
export default Detail;