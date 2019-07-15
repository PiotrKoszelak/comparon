import React from "react";
import {DataProviderComponent} from "../statefull/DataProvider";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        data: {
                width: '80vw',
                padding: 10,
                borderRadius: 10,
                position: 'relative',
                top: 20,
                left: '10vw',
        },
      }));



function DataProviderContainer () {
        const classes = useStyles();

        return(
                <section className={classes.data}>
                        <DataProviderComponent />
                </section>
        );
};

export default DataProviderContainer;