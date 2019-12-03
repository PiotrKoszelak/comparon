import React from "react";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
        empty: {
                top: 60,
                height: 100,
                position: 'fixed',
                zIndex: 2,
                width: '100vw',
                //backgroundColor: 'white',
                background: 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1))',
        },
      }));



function Empty () {
        const classes = useStyles();

        return(
                <div className={classes.empty} >
                </div>
        );
};

export default Empty;