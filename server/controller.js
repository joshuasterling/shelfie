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
  }
};
