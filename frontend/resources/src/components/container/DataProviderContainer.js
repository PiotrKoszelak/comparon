import React from "react";
import {DataProviderComponent} from "../statefull/DataProvider";
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



function DataProviderContainer () {
        const classes = useStyles();

        return(
                <div>
                        <section className={classes.data}>
                                <DataProviderComponent />
                        </section>
                        <DetailProviderComponent />
                </div>

        );
};

export default DataProviderContainer;