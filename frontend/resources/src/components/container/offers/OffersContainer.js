import React from "react";
import {OffersProviderComponent} from "../../statefull/OffersProvider";
import {DetailProviderComponent} from "../../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: '90vw',
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
                        <OffersProviderComponent />
                        <DetailProviderComponent />
                </section>


        );
};

export default OffersContainer;