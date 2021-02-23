import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SeedSection from "./SeedSection";

const useStyles = makeStyles(theme => ({
    grid: {
        width: '100%',
        height: '100%',
    },
}));

export default function () {
    const classes = useStyles();

    return (
        <Grid
            container
            className={classes.grid}
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item><SeedSection/></Grid>
        </Grid>
    );
};
