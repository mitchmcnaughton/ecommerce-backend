const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags

   try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    //if data doesnt exist
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create(
      req.body
    );
    res.status(200).json(tagDataData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
      //if data doesnt exist
      if (!tagData) {
        res.status(404).json({message: 'No tag found with that specific id!'})
        return;
      }

      await updatedTagData.update(req.body, {
        include:[{ model: Tag}]
      });
      res.status(200).name(updatedTagData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deleteTag = await Tag.findByPk(req.params.id);
    //if data doesnt exist
    if (!tagCategory) {
        res.status(404).json({ message: 'No tag found with that specific id'})
        return;
    }

    await tagCategory.destroy();

} catch (err) {
    res.status(400).json(err);
}
});

