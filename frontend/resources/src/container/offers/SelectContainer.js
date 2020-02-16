import React from "react";
import SelectSortType from "../../statefull/SelectSortType";
import SelectOperator from "../../statefull/SelectOperator";
import SelectCity from "../../statefull/SelectCity";
import SelectPeriod from "../../statefull/SelectPeriod";
import SelectType from "../../statefull/SelectType";
import SelectPrice from "../../statefull/SelectPrice";
import SelectSpeed from "../../statefull/SelectSpeed";
import SelectOfferId from "../../statefull/SelectOfferId"
import OtherData from "../../statefull/FetchOtherData"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ShowCriteriaLabelComponent } from "../../statefull/Menu";
import Fab from '@material-ui/core/Fab';
import * as colors from "../../style/colors";

const useStyles = makeStyles({
        root:{
                display: 'flex',
                flexDirection: 'column',
                top: 80,
                position: 'fixed',
                alignItems: 'center',
                justifyContent: 'center',
                width: '220px',
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
                paddingRight: 10,
                height: 'calc(100vh - 250px)',
                borderRadius: 15,
                boxShadow: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
                border: `0.5px solid ${colors.secondaryColor}`,
                borderLeft: 'none',
                borderTopRightRadius: 15,
                borderBottomRightRadius: 15,
                '@media (max-width:800px)' : {
                        display: 'none'
                }
        },
        mobile: {
                width: 200,
                '@media (max-width:800px)' : {
                        display: 'block',
                        backgroundColor: 'none',
                        border: 'none',
                }
        },
        switch : {
                position:'relative',
                left: -30,
                top: 10,
                display: 'none',
                '@media (max-width:800px)' : {
                        display: 'block'
                }
        },
        fab: {
                position: 'absolute',
                left: 180,
                top: -40,
                background: 'none',
                boxShadow: 'none',
                border: `2px solid ${colors.primaryColor}`,

        },
        showCriteriaButton: {
                boxShadow: 'none',
                background: 'none',
                fontSize:10, 
                padding:5, 
                paddingRight:10,
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
                        <Drawer
                                open={checked}
                                onClose={() => null}
                        >
                                <div className={`${classes.mobile} ${classes.selects}`} >
                                        <SelectOfferId />
                                        <SelectCity />
                                        <SelectSortType />
                                        <SelectOperator />
                                        <SelectPeriod />
                                        <SelectType />
                                        <SelectPrice />
                                        <SelectSpeed />
                                        <OtherData />
                                        <Fab size="small" className={classes.fab} onClick={handleClick}>
                                                <ChevronLeftIcon />
                                        </Fab>
                                </div>
                        </Drawer>

                        {/* web */}
                        <Paper className={classes.selects}>
                                <SelectOfferId />
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