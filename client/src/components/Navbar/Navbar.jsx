import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        height: "50px",
        background:"#3f51b5",
    }
}))
function Navbar() {
    const classes=useStyles()
    return (
        <div className={classes.navbar}>
            
        </div>
    )
}

export default Navbar
