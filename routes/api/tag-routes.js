const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include:[Product]
  }).then(tags=>res.json(tags))
  .catch(err=>res.json(err))
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id:req.params.id
    },
    include:[Product]
  }).then(tags=>res.json(tags))
  .catch(err=>res.json(err))
  // find one category by its `id` value
  // be sure to include its associated Products
});
  // find a single tag by its `id`
  // be sure to include its associated Product data


router.post('/', (req, res) => {
  Tag.create(req.body).then(tags=>res.json(tags))
  .catch(err=>res.json(err))
  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body,{
    where:{
      id:req.params.id
    },
    include:[Product]
  }).then(tags=>res.json(tags))
  .catch(err=>res.json(err))
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where:{
      id:req.params.id
    },
  }).then(tags=>res.json(tags))
  .catch(err=>res.json(err))
  // delete on tag by its `id` value
});

module.exports = router;
