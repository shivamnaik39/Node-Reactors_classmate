import React from 'react'
import { Grid, Typography } from "@material-ui/core"  
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    subjectcard: {
        height: "200px",
        margin: "20px",
        width: "300px",
        // background: "#3f51b5",
        borderRight:"90px solid #3f51b5",
        borderRadius: "20px",
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    subjectcard2: {
        height: "200px",
        margin: "20px",
        width: "300px",
        borderRight:"90px solid #c2185b",
        // background: "#c2185b",
        borderRadius: "20px",
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    subjectname: {
        background: "white",
        height: "100px",
        width: "100%",
    }
}))
function Subjectcard() {
    const classes = useStyles();
    return (
        <>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center">
            <Grid container item direction="column" className={classes.subjectname} alignItems="center" justify="center">
                <Typography>
                        Subject Name
                </Typography>
                    <Typography>
                        Lorem ipsum dolor sit.
                    </Typography>
            </Grid>
        </Grid>
        <Grid className={classes.subjectcard2} container item alignItems="center" justify="center">
            <Grid container item direction="column" className={classes.subjectname} alignItems="center" justify="center">
                <Typography>
                        Subject Name
                </Typography>
                    <Typography>
                        Lorem ipsum dolor sit.
                    </Typography>
            </Grid>
        </Grid>
            </>
    )
}

export default Subjectcard
