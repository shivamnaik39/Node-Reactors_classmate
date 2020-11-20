import { Grid } from '@material-ui/core'
import React from 'react'
import LinkCard from "./LinkCard"
function LinkPage() {
    return (
        <Grid container item >
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
            <Grid item md={4} sm={6} container justify="center" alignItems="center" xs={12}>
                <LinkCard />
            </Grid>
        </Grid>
    )
}

export default LinkPage
