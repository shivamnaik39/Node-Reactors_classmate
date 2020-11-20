import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import NoteIcon from '@material-ui/icons/Note';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    root: {
        width: 275,
        margin: "10px auto",
        background:"rgba(0,0,0,0.1)",
        [theme.breakpoints.down("xs")]: {
            margin: "10px"
        }
    },
    title: {
        fontSize: 14,
    },
}));

export default function NoteCard() {
  const classes = useStyles();

    return (
        <>
            <Card className={classes.root} variant="outlined" container item  justify="center" alignItem="center">
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <NoteIcon size="large"/> {"  "}
                        Assignment Name
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}
