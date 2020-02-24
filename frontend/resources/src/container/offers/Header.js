import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import NumberOfOffers from "../../statefull/NumberOfOffers";
import * as colors from "../../style/colors";

const useStyles = makeStyles(theme => ({
        subtitle: {
                fontFamily: "Lato",
                height: 50,
                position: 'fixed',
                left: 'auto',
                right: 0,
                display: 'flex',
                boxShadow: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                top: 80,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                zIndex: 3,
                paddingRight: 20,
                paddingLeft: 20,
                border: `2px solid ${colors.secondaryColor}`,
                borderRight: 'none',
                borderTopLeftRadius: 15,
                borderBottomLeftRadius: 15,
                color: `${colors.secondaryColorDark}`,
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
                        <NumberOfOffers />
                </Paper>
        );
};

export default Header;