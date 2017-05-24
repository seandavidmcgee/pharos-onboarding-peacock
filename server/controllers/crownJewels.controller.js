import CrownJewelCategories from '../models/crownJewelCategories';

/**
 * Get all crown jewel categories
 * @param req
 * @param res
 * @returns void
 */
export function getCategories(req, res) {
  CrownJewelCategories.findOne({name: 'crownJewels'}).exec((err, categories) => {
    let crownJewels = categories.categories;
    if (err) {
      res.status(500).send(err);
    }
    res.json({ crownJewels });
  });
}

/**
 * Save a crown jewel
 * @param req
 * @param res
 * @returns void
 */
export function getCrownJewel(req, res) {
  let category = req.body.crownJewel.category;
  let newCrownJewel = {"jewel": req.body.crownJewel.name, "description": req.body.crownJewel.content};

  CrownJewelCategories.findOneAndUpdate({
      'name': 'crownJewels',
      'categories': {
          '$elemMatch': {
              'categoryName': category
          }
      }
  }, {$push: {"categories.$.jewels": newCrownJewel}}).exec((err, crownJewel) => {
      console.log(crownJewel);
      if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).end();
    }
  })
}

/**
 * Delete a crown jewel
 * @param req
 * @param res
 * @returns void
 */
export function deleteCrownJewel(req, res) {
  let category = req.body.crownJewel.category;
  let crownJewelToDelete = {"jewel": req.body.crownJewel.name, "description": req.body.crownJewel.content};

  CrownJewelCategories.findOneAndUpdate({
      'name': 'crownJewels',
      'categories': {
          '$elemMatch': {
              'categoryName': category
          }
      }
  }, {$pull: {"categories.$.jewels": crownJewelToDelete}}).exec((err, crownJewel) => {
      if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).end();
    }
  })
}

/**
 * Edit a crown jewel
 * @param req
 * @param res
 * @returns void
 */
export function editCrownJewel(req, res) {
  let crownJewelOriginalName = req.body.crownJewel.originalName;
  let crownJewelNewName = req.body.crownJewel.newName;
  let crownJewelCategory = req.body.crownJewel.category;
  let crownJewelContent = req.body.crownJewel.content;

  let updates = {$set: {"jewels.$.jewel": crownJewelNewName,"jewels.$.description": crownJewelContent}};

  CrownJewels.findOneAndUpdate({
      'name': crownJewelCategory,
      'jewels': {
          $elemMatch: {
              'jewel': crownJewelOriginalName
          }
      }
  }, updates, { "new": true, "upsert": true }).exec((err, crownJewel) => {
    if (err) {
        res.status(500).send(err);
    } else {
        res.status(200).end();
    }
  })
}
