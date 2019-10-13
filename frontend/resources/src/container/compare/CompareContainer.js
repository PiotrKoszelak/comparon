import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CompareProvider from "../../statefull/CompareProvider";

const useStyles = makeStyles(theme => ({

}));



function CompareContainer () {
        const classes = useStyles();

        return(
                <section className={classes.data}>
                        <CompareProvider />
                </section>
        );
};

export default CompareContainer;