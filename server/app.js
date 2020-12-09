const express = require('express')
const bodyParse  = require('body-parser')
const path = require('path')
const app = express();

const routes = require("./routes/index")


/*=============================================
=       CONFIG BODY PARSER                 =
=============================================*/
app.use( bodyParse.urlencoded({  extended: false }) )
app.use( bodyParse.json() )



/*=============================================
=            ENABLE FOLDER PUBLIC            =
=============================================*/

app.use( express.static( path.resolve(__dirname, "../public") ) );


/*=============================================
=            CONFIG CORS FOR SHARE API        =
=============================================*/

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});


/*=============================================
=       ALL ROUTES FOR API                 =
=============================================*/
app.use("/api/v1", routes )


module.exports = app;