import React from "react";
import {OffersProviderComponent} from "../../statefull/OffersProvider";
import {DetailProviderComponent} from "../../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: 'calc(81vw - 40px)',
                position: 'relative',
                left: '16vw',
                top: 50,
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