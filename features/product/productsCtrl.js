const Products = require( './Products' );

module.exports = {
  postProduct( req, res ){
    new Products( req.body ).save( ( err, product ) => {
      if( err ){
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( product );
    });
  } ,
  getProducts( req, res ){
    Products.find( {}, ( err, products ) => {
      if( err ){
        return res.status( 500 ).json( err );
      }
      return res.status( 200 ).json( products );
    });
  } ,

};
