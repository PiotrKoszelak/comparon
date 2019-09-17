import React from "react";
import OffersProvider from "../../statefull/OffersProvider";
import DetailProvider from "../../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                maxWidth: '90vw',
                position: 'relative',
                left: '5vw',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 70,
                zIndex: 1,
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