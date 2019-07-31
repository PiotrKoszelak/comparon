import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { SelectSortTypeComponent } from "../statefull/SelectSortType";
import { NumberOfOffersComponent } from "../statefull/NumberOfOffers";
import { ButtonComparisonComponent } from "../statefull/ButtonComparison";

const useStyles = makeStyles(theme => ({
        bar: {
                left: '16vw',
                width: 'calc(81vw - 40px)',
                padding: 20,
                height: 50,
                position: 'fixed',
                zIndex: 1,
        },
        subtitle: {
                fontFamily: 'Lato',
                height: 50,
                float: 'left',
                display: 'flex',
                alignItems: 'center',
                width: '20%',
        },
        items: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: '70%',
                width: '30%',
        }
      }));



function Header () {
        const classes = useStyles();

        return(
                <Paper className={classes.bar}>
                        <div className={classes.subtitle}>
                                <NumberOfOffersComponent />
                        </div>
                        <div className={classes.items} >
                                <ButtonComparisonComponent />
                                <SelectSortTypeComponent  />
                        </div>
                </Paper>
        );
};

export default Header;