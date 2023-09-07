const express = require('express'); //our actual routes
const ProductSchema = require('../models/product'); //access our Schema

const router = express.Router();

//router.get('/api/products/', async (req, res) => {
// connects to mongoose schema and saves the data we go back from mongo

// GET ALL Products
router.get('/api/product/', async (req, res) => {
        const findProduct = await ProductSchema.find();
        res.json(findProduct)
    } catch (error) {
         res.status(500).json({ error: error.message });
     }
})

// GET SINGLE  product
    router.get('/api/product/:id', async (req, res) => {
    const findProduct = await ProductSchema.findById(req.params.id);
    res.json(findProduct)
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
 })

// CREATE PRODUCT
router.post('/api/product', async (req, res) => {
    const product = new ProductSchema({ ...req.body });
    await product.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))


    try {
       const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
})

// UPDATE product
    router.put('/api/product/:id', async (req, res) => {
    const { id } = req.params;
    await ProductSchema.updateOne({id} , req.body)
    .then(response => res.json(response))
    .catch(error => res.status(500).json(error))
        try {
 const updatedProduct = await ProductSchema.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedProduct) {
     return res.status(404).json({ message: 'Product not found' });
  }
       res.json(updatedProduct);
    } catch (error) {
         res.status(500).json({ error: error.message });
    }
});

Delete product
router.delete('/product/:id', async (req, res) => {
    try {
         const deletedProduct = await ProductSchema.findByIdAndDelete(req.params.id);
         if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
         }
        res.json(deletedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
     }
 });

module.exports = router;
