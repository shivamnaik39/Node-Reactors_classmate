const express = require("express");
const cors=require('cors')
const StudentRoute = require("./db/routes/Student.route")
const ClassworkRoute = require("./db/routes/Classwork.route")
const RecruitorRoute = require("./db/routes/Recruitor.route")
require("./db/mongoose");

const app = express();
app.use(cors())
app.use(express.json());
app.use('/student',StudentRoute)
app.use('/recruitor',RecruitorRoute)
app.use('/classwork',ClassworkRoute)

module.exports = app;
