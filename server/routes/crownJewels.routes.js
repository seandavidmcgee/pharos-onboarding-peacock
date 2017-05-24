import { Router } from 'express';
import * as CrownJewelsController from '../controllers/crownJewels.controller';
const router = new Router();

// Get all Crown Jewel Categories
router.route('/crownJewels').get(CrownJewelsController.getCategories);

// Get one crown jewel and edit it
router.route('/crownJewels/edit').post(CrownJewelsController.editCrownJewel);

// Add a new Crown Jewel
router.route('/crownJewels').post(CrownJewelsController.getCrownJewel);

// Delete a crown jewel by name
router.route('/crownJewels').delete(CrownJewelsController.deleteCrownJewel);

export default router;
