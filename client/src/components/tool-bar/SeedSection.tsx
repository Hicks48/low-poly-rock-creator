import React from "react";

import { Grid, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function() {
    return (
        <Grid container direction="row" spacing={3}>
            <Grid item>
                <TextField id="seed" type="number"/>
            </Grid>
            <Grid item>
                <Button></Button>
            </Grid>
        </Grid>
    );
};
