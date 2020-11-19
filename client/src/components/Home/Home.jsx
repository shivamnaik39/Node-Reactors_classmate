import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import subjects from "../../assets/subjects.svg"
import money from "../../assets/money.svg"
import jobs from "../../assets/jobs.svg"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    svgicon: {
        width: "180px",
        height:"150px",
        [theme.breakpoints.down("xs")]: {
            height: "auto",
        }
    },
    selectionicons: {
        minHeight: "calc(100vh - 50px)",
        marginTop: "50px",
        [theme.breakpoints.down("xs")]: {
            flexDirection:"column"
        }
    },
    title: {
        fontSize: "30px",
        margin:"20px auto",
        [theme.breakpoints.down("sm")]: {
            fontSize: "25px"
        },
        [theme.breakpoints.down("xs")]: {
            margin: "0 auto 50px auto",
            fontSize: "20px",
        }
    }
}))
function Home() {
    const classes=useStyles()
    return (
            <Grid container item  justify="space-around" alignItems="center" className={classes.selectionicons}>
                <Grid container item sm={4} justify="center" alignItems="center" direction="column" >
                    <img src={subjects} alt="learn" className={classes.svgicon} />
                    <Typography className={classes.title}>Classwork</Typography>
                </Grid>
                <Grid container item sm={4} justify="center" alignItems="center" direction="column" >
                    <img src={jobs} alt="jobs" className={classes.svgicon} />
                    <Typography className={classes.title}>Internships</Typography>
                </Grid>
                <Grid container item sm={4} justify="center" alignItems="center" direction="column" >
                    <img src={money} alt="money" className={classes.svgicon} />
                    <Typography className={classes.title}>Finance</Typography>
                </Grid>
            </Grid>
    )
}

export default Home
