const router = require('express').Router();
const { FOUND_ROWS } = require('mysql2/lib/constants/client');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  }).then(categories=>res.json(categories))
  .catch(err=>res.json(err))

  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id:req.params.id
    },
    include:[Product]
  }).then(categories=>res.json(categories))
  .catch(err=>res.json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body).then(categories=>res.json(categories))
  .catch(err=>res.json(err))

  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body,{
    where:{
      id:req.params.id
    },
    include:[Product]
  }).then(categories=>res.json(categories))
  .catch(err=>res.json(err))
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where:{
      id:req.params.id
    },
  }).then(categories=>res.json(categories))
  .catch(err=>res.json(err))
  // delete a category by its `id` value
});

module.exports = router;
