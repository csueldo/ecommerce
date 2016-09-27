const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const mongojs = require( 'mongojs' );
const db = mongojs( 'ecommerce', ['products'] );

const app = express();
const port = 4000;
app.use( json() );
app.use( cors() );

app.get( '/api/products', ( req, res ) => {
  res.send("I am a random string in GET api/products");
} );

app.get( '/api/products/:id', ( req, res ) => {
  res.send("I will GET you a present at api/products. It is a " + req.params.id);
} );

app.post( '/api/products', ( req, res ) => {
  db.products.save( req.body, ( err, product ) => {
      if( err ){
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( product );
  });
});

app.put( '/api/products/:id', ( req, res ) => {
  res.send("Once I was a walrus but then I was PUT in api/products with " + req.params.id);
} );

app.delete( '/api/products/:id', ( req, res ) => {
  res.send("I have deleted nothing, especially not " + req.params.id);
} );





app.listen( port, () => console.log( `Listening on ${ port }` ) );
