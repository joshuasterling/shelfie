module.exports = {
  getInventory: (req, res) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .get_inventory()
      .then(inventory => {
        res.status(200).send(inventory);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  createProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create_product([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  getOne: (req, res) => {
    const dbInstance = req.app.get("db");
    const { id } = req.params;

    dbInstance
      .get_product(id)
      .then(product => {
        res.status(200).send(product[0]);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  updateProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;
    const { id } = req.params;

    // console.log(dbInstance.products);
    // dbInstance.products
    //   .updateDoc(id, { name, price, img })
    //   .then(updatedProduct => {
    //     res.status(200).send(updatedProduct);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //     console.log(err);
    //   });
    dbInstance
      .update_product([id, name, price, img])
      .then(updatedProduct => {
        res.status(200).send(updatedProduct);
      })
      .catch(err => {
        res.status(500).send(err);
        console.log(err);
      });
  }
};
