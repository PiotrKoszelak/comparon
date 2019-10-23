import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import SelectedOfferProvider from "../../statefull/SelectedOfferProvider";

const useStyles = makeStyles(theme => ({

}));



function SelectedOfferContainer () {
        const classes = useStyles();

        return(
                <section className={classes.data}>
                        <SelectedOfferProvider />
                </section>
        );
};

export default SelectedOfferContainer;