import React from "react";
import SelectSortType from "../../statefull/SelectSortType";
import SelectOperator from "../../statefull/SelectOperator";
import SelectCity from "../../statefull/SelectCity";
import SelectPeriod from "../../statefull/SelectPeriod";
import SelectType from "../../statefull/SelectType";
import SelectPrice from "../../statefull/SelectPrice";
import SelectSpeed from "../../statefull/SelectSpeed";
import OtherData from "../../statefull/FetchOtherData"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { createMuiTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ShowCriteriaLabelComponent } from "../../statefull/Menu";
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
        root:{
                display: 'flex',
                flexDirection: 'column',
                top: 80,
                position: 'fixed',
                alignItems: 'center',
                justifyContent: 'center',
                width: '200px',
                zIndex: 3,
        },
        label: {
                marginTop: 10,
                fontSize: '8 !important',
        },
        selects: {
                position: 'relative',
                top: 50,
                padding: 20,
                height: 'calc(100vh - 250px)',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                '@media (max-width:600px)' : {
                        display: 'none'
                }
        },
        mobile: {
                width: 200,
                '@media (max-width:600px)' : {
                        display: 'block'
                }
        },
        switch : {
                position:'relative',
                left: -30,
                display: 'none',
                '@media (max-width:600px)' : {
                        display: 'block'
                }
        },
        fab: {
                position: 'absolute',
                left: 190,
                top: -40,
        }
      });


function SelectContainer () {
        const classes = useStyles();
        const [checked, setChecked] = React.useState(false);

        function handleClick() {
        setChecked(prev => !prev);
        }

        return(
                <div className={classes.root}>

                        {/*} mobile */}
                        <div className={classes.switch}>
                                <ShowCriteriaLabelComponent classes={classes}  handleClick={handleClick} />
                        </div>
                        <SwipeableDrawer
                                open={checked}
                                onClose={() => null}
                                onOpen={() => null}
                        >
                                <div className={`${classes.mobile} ${classes.selects}`} >
                                        <SelectCity />
                                        <SelectSortType />
                                        <SelectOperator />
                                        <SelectPeriod />
                                        <SelectType />
                                        <SelectPrice />
                                        <SelectSpeed />
                                        <OtherData />
                                        <Fab size="small" color="secondary" aria-label="add" className={classes.fab} onClick={handleClick}>
                                                <ChevronLeftIcon />
                                        </Fab>
                                </div>
                        </SwipeableDrawer>

                        {/* web */}
                        <Paper className={classes.selects}>
                                <SelectCity />
                                <SelectSortType />
                                <SelectOperator />
                                <SelectPeriod />
                                <SelectType />
                                <SelectPrice />
                                <SelectSpeed />
                                <OtherData />
                        </Paper>
                        
                </div>
        );
};

export default SelectContainer;