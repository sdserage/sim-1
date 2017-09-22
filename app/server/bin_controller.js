module.exports = {
    create: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params, query } = req; 

      db.add_inventory([params.id, params.name, params.price, query.desc])   //db.SQLfile
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getOne: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params } = req; 

      db.get_bin([params.id])
        .then( bin => res.status(200).send( bin ) )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const { params } = req; 
      
        dbInstance.get_bins([params.shelf])
        .then( bins => res.status(200).send( bins ) )
        .catch( () => res.status(500).send() );
    },
  
    update: ( req, res, next ) => {
      const db = req.app.get('db');
  
      db.edit_inventory()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    delete: ( req, res, next ) => {
      const db = req.app.get('db');
      const { params } = req;
  
      db.delete_inventory([params.id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };