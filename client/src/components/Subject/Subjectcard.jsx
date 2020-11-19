import React from 'react'
import { Grid, Typography } from "@material-ui/core"  
import { makeStyles } from '@material-ui/core/styles';
const bgarray = [
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Simple-Purple-Checked-Background-Image.jpg",
    "https://image.freepik.com/free-vector/abstract-colorful-flow-shapes-background-design_23-2148237985.jpg",
    "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0zZ6xLXTJblGw-VdjOLHESwA_JblLTSheQ&usqp=CAU"
]
const useStyles = makeStyles((theme) => ({
    subjectcard: {
        height: "150px",
        margin: "20px",
        width: "300px",
        backgroundImage: "url("+bgarray[0]+")",
        // borderRight:"90px solid #3f51b5",
        borderRadius: "20px",
        boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
    subjectcard2: {
        height: "150px",
        margin: "20px",
        width: "300px",
        background: "url("+bgarray[1]+")",
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
        <Grid className={classes.subjectcard} container item alignItems="center" justify="center">
            <Grid container item direction="column" className={classes.subjectname} >
                <Typography>
                        Subject Name
                </Typography>
                    <Typography>
                        Lorem ipsum dolor sit.
                    </Typography>
            </Grid>
        </Grid>
        <Grid className={classes.subjectcard2} container item alignItems="center" justify="center">
            <Grid container item direction="column" className={classes.subjectname}>
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
