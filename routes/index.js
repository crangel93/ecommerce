const router = require('express').Router();
const apiRoutes = require('./api');
const categoryRoutes=require('./category-routes');
const productRoutes=require('./product-routes')
//router.use('/api', apiRoutes);
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);


module.exports = router;