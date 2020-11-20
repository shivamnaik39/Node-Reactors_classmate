import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import AssignmentCard from './AssignmentCard'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "20px",
        margin: "10px auto 0 auto",
        textTransform:"capitalize"
    },
    assignmentsection: {
        // borderLeft: "1px solid rgba(0,0,0,0.2)",
        margin: "auto"
    }
}))
function AssignmentSection({ status }) {
    const classes=useStyles()
    return (
        <Grid container item sm={3} justify="space-around" alignItems="center" direction="column" className={classes.assignmentsection}>
            <Typography className={classes.title}>{status}</Typography>
            <br />
            <Grid item>
                <AssignmentCard status={status} />
                <AssignmentCard status={status} />
                <AssignmentCard status={status} />
            </Grid>
        </Grid>
    )
}

export default AssignmentSection
