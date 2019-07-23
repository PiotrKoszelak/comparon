import React from "react";
import {SelectOperatorComponent} from "../statefull/SelectOperator";
import {SelectCityComponent} from "../statefull/SelectCity";
import {SelectPeriodComponent} from "../statefull/SelectPeriod";
import {SelectTypeComponent} from "../statefull/SelectType";
import {SelectPriceComponent} from "../statefull/SelectPrice";
import {SelectSpeedComponent} from "../statefull/SelectSpeed";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
        selects: {
                width: '10vw',
                padding: 20,
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                top: 'calc(5vh - 10px)',
                height: 'calc(90vh - 40px)',
                left: '3vw',
                position: 'relative',
                alignItems: 'center',
                float: 'left',
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
                        <SelectPriceComponent />
                        <SelectSpeedComponent />
                </Paper>
        );
};

export default SelectContainer;