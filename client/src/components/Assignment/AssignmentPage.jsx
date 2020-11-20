import React from 'react'
import Sidebar from '../SubjectPage/Sidebar'
import AssignmentSection from './AssignmentSection'
import {Grid} from "@material-ui/core"
function AssignmentPage() {
    return (
        <Grid container item direction="row" justify="space-around">
            <AssignmentSection status="working"  />
            <AssignmentSection status="review"  />
            <AssignmentSection status="done"  />
        </Grid>
    )
}

export default AssignmentPage
