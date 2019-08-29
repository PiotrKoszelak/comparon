import React from "react";
import { SelectSortTypeComponent } from "../../statefull/SelectSortType";
import {SelectOperatorComponent} from "../../statefull/SelectOperator";
import {SelectCityComponent} from "../../statefull/SelectCity";
import {SelectPeriodComponent} from "../../statefull/SelectPeriod";
import {SelectTypeComponent} from "../../statefull/SelectType";
import {SelectPriceComponent} from "../../statefull/SelectPrice";
import {SelectSpeedComponent} from "../../statefull/SelectSpeed";
import {OtherDataComponent} from "../../statefull/FetchOtherData"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
        selects: {
                padding: 20,
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                top: 80,
                position: 'fixed',
                alignItems: 'center',
                float: 'left',
                justifyContent: 'space-around',
                height: 'calc(100% - 160px)',
                zIndex: 3,
        },
      }));


function SelectContainer () {
        const classes = useStyles();
        return(
                <Paper className={classes.selects}>
                        <OtherDataComponent />
                        <SelectSortTypeComponent />
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