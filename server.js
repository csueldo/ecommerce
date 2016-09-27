const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const mongojs = require( 'mongojs' );

const app = express();
const port = 4000;
app.use( json() );
app.use( cors() );

app.listen( port, () => console.log( `Listening on ${ port }` ) );
