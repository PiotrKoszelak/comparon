import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
        empty: {
                height: 150,
                position: 'fixed',
                zIndex: 2,
                width: '100vw',
                backgroundColor: 'white',
        },
      }));



function Empty () {
        const classes = useStyles();

        return(
                <div className={classes.empty}>

                </div>
        );
};

export default Empty;