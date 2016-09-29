const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const app = express();
const port = 4000;
const mongoUri = 'mongodb://localhost:27017/Products';



app.use( json() );
app.use( cors() );

mongoose.connect( mongoUri );
mongoose.connection.once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );





app.listen( port, () => console.log( `Listening on ${ port }` ) );
