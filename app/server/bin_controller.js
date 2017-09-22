module.exports = {
    create: ( req, res, next ) => {
      const db = req.app.get('db');
  
      db.add_inventory()   //db.SQLfile
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getOne: ( req, res, next ) => {
      const db = req.app.get('db');
  
      db.get_bin()
        .then( bin => res.status(200).send( bin ) )
        .catch( () => res.status(500).send() );
    },
  
    getAll: ( req, res, next ) => {
      const db = req.app.get('db');
  
      db.get_bins()
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
  
      db.delete_inventory()
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };