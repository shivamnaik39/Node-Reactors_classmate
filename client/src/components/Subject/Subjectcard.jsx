import React from 'react'
import { Grid, Typography } from "@material-ui/core"  
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../Navbar/Navbar"
const bgarray = [
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148235690.jpg",
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background-design_23-2148237985.jpg",
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background_23-2148233991.jpg",
    "https://image.freepik.com/free-vector/colorful-flow-shapes-background_23-2148268742.jpg",
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background_52683-21487.jpg",
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background-design_23-2148237714.jpg",
]
const useStyles = makeStyles((theme) => ({
    subjectcard: {
        height: "150px",
        margin: "20px",
        width: "300px",
        // backgroundImage: "linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[0]+")",
        // borderRight:"90px solid #3f51b5",
        borderRadius: "20px",
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    subjectname: {
        // background: "white",
        height: "100px",
        width: "100%",
        color: "white",
        margin:"10px 0 0px 20px"
    }
}))
function Subjectcard() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Grid container justify="space-around" alignItems="center">
        <Grid className={classes.subjectcard} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[0]+")"}} container item alignItems="center" justify="center" md={3} sm={4} >
            <Grid container item direction="column" className={classes.subjectname} >
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
        </Grid>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center" md={3} sm={4} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[1]+")"}}>
            <Grid container item direction="column" className={classes.subjectname}>
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
        </Grid>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center" md={3} sm={4} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[2]+")"}}>
            <Grid container item direction="column" className={classes.subjectname}>
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
        </Grid>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center" md={3} sm={4} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[3]+")"}}>
            <Grid container item direction="column" className={classes.subjectname}>
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
                </Grid>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center" md={3} sm={4} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[5]+")"}}>
            <Grid container item direction="column" className={classes.subjectname}>
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
                </Grid>
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center" md={3} sm={4} style={{background:"linear-gradient(to left,rgba(0,0,0,.1),rgba(0,0,0,.5)),url("+bgarray[4]+")"}}>
            <Grid container item direction="column" className={classes.subjectname}>
                <Typography>
                    <b>
                        Subject Name
                    </b>
                </Typography>
                    <Typography>
                        <b>
                        Lorem ipsum dolor sit.
                        </b>
                    </Typography>
            </Grid>
                </Grid>
                </Grid>
            </>
    )
}

export default Subjectcard
