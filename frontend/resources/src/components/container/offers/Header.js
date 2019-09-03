import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NumberOfOffersComponent } from "../../statefull/NumberOfOffers";

const useStyles = makeStyles(theme => ({
        subtitle: {
                fontFamily: 'Lato',
                height: 50,
                position: 'fixed',
                left: 'auto',
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: 80,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                zIndex: 3,
                paddingRight: 20,
                paddingLeft: 20,
                '@media (max-width:600px)' : {
                        fontSize: 12,
                        paddingRight: 10,
                        paddingLeft: 10,
                }
        },
      }));



function Header () {
        const classes = useStyles();

        return(
                <Paper className={classes.subtitle}>
                        <NumberOfOffersComponent />
                </Paper>
        );
};

export default Header;