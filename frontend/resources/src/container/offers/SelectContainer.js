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
import Switch from '@material-ui/core/Switch';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
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
                top: 30,
                padding: 20,
                height: 'calc(100vh - 250px)',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
        },
      }));

      let theme = createMuiTheme({
        typography: {
                fontSize: 12,
        },
      });


function SelectContainer () {
        const classes = useStyles();
        const [checked, setChecked] = React.useState(true);

        function handleChange() {
        setChecked(prev => !prev);
        }

        return(
                <div className={classes.root}>
                        <ThemeProvider theme={theme}>
                                <Typography>
                                <FormControlLabel
                                        className={classes.label}
                                        control={<Switch 
                                                checked={checked} 
                                                onChange={handleChange}
                                                size="small"
                                                />}
                                        label="Pokaż kryteria"
                                />
                                </Typography>
                        </ThemeProvider>
                        <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
                                <Paper className={classes.selects}>
                                        <SelectSortTypeComponent />
                                        <SelectOperatorComponent />
                                        <SelectCityComponent />
                                        <SelectPeriodComponent />
                                        <SelectTypeComponent />
                                        <SelectPriceComponent />
                                        <SelectSpeedComponent />
                                        <OtherDataComponent />
                                </Paper>
                        </Slide>
                </div>
        );
};

export default SelectContainer;