import React from "react";
import OffersProvider from "../../statefull/OffersProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: 'calc(100vw - 320px)',
                position: 'relative',
                left: 250,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 70,
                zIndex: 1,
                '@media (max-width:600px)' : {
                        width: 'calc(100vw - 60px)',
                        left: 30,
                }
        },
      }));



function OffersContainer () {
        const classes = useStyles();

        return(
                
                <section className={classes.data}>
                        <OffersProvider />
                </section>


        );
};

export default OffersContainer;