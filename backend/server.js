var express = require('express');
var app = express();
let modelInit=require("./models/init");
var bodyParser = require('body-parser');
var routes=require('./routes');
var cors = require('cors')
app.use(cors())

app.use(bodyParser.json());
let router=express.Router()
routes(router)

app.use('/app',router)

const PORT=process.env.PORT||8080
app.listen(PORT,console.log(`server start:#${PORT}`));
