import React from "react";
import {SelectOperatorComponent} from "../statefull/SelectOperator";
import {SelectCityComponent} from "../statefull/SelectCity";
import {SelectPeriodComponent} from "../statefull/SelectPeriod";
import {SelectTypeComponent} from "../statefull/SelectType";
import {SelectPriceComponent} from "../statefull/SelectPrice";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
        selects: {
                top: 20,
                width: '80vw',
                padding: 20,
                borderRadius: 10,
                display: 'flex',
                flexWrap: 'wrap',
                left: '10vw',
                position: 'relative',
                justifyContent: 'space-around',
        },
      }));



function SelectContainer () {
        const classes = useStyles();

        return(
                <Paper className={classes.selects}>
                        <SelectOperatorComponent />
                        <SelectCityComponent />
                        <SelectPeriodComponent />
                        <SelectTypeComponent />
                        
                </Paper>
        );
};

export default SelectContainer;