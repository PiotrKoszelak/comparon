import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { NumberOfOffersComponent } from "../../statefull/NumberOfOffers";

const useStyles = makeStyles(theme => ({
        subtitle: {
                fontFamily: 'Lato',
                height: 50,
                position: 'fixed',
                left: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20%',
                top: 80,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                zIndex: 3,
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