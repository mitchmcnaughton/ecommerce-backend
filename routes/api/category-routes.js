const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
 // GET all cards
    try {
      const categoryData = await Category.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Product.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    //if data doesnt exist
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(
      req.body
    );
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {


    const categoryData = await Category.findByPk(categoryId, {
        include: [{ model: Product }],
      });
      //if data doesnt exist
      if (!categoryData) {
        res.status(404).json({message: 'No category found with that specific id!'})
        return;
      }

      await updatedCategoryData.update(req.body, {
        include:[{ model: Product}]
      });
      res.status(200).name(updatedCategoryData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    try {
        const deleteCategory = await Category.findByPk(req.params.id);
        //if data doesnt exist
        if (!deleteCategory) {
            res.status(404).json({ message: 'No category found with that specific id'})
            return;
        }

        await deleteCategory.destroy();

    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

