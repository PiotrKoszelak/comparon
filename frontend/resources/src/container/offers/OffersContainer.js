import React from "react";
import OffersProvider from "../../statefull/OffersProvider";
import DetailProvider from "../../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: 'calc(100vw - 320px)',
                position: 'relative',
                left: 250,
                display: 'flex',
                justifyContent: 'center',
                marginTop: 70,
                zIndex: 1,
                '@media (max-width:600px)' : {
                        width: 'calc(100vw - 100px)',
                        left: 50,
                }
        },
      }));



function OffersContainer () {
        const classes = useStyles();

        return(
                
                <section className={classes.data}>
                        <OffersProvider />
                        <DetailProvider />
                </section>


        );
};

export default OffersContainer;