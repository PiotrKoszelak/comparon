import React from "react";
import {OffersProviderComponent} from "../statefull/OffersProvider";
import {DetailProviderComponent} from "../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: '80vw',
                padding: 10,
                borderRadius: 10,
                position: 'relative',
                top: 50,
                left: '10vw',
        },
      }));



function OffersContainer () {
        const classes = useStyles();

        return(
                <div>
                        <section className={classes.data}>
                                <OffersProviderComponent />
                        </section>
                        <DetailProviderComponent />
                </div>

        );
};

export default OffersContainer;