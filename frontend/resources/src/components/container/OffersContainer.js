import React from "react";
import {OffersProviderComponent} from "../statefull/OffersProvider";
import {DetailProviderComponent} from "../statefull/DetailProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: '77vw',
                borderRadius: 10,
                position: 'relative',
                top: 'calc(5vh - 10px)',
                left: '5vw',
                float: 'left',
                position: 'relative',
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