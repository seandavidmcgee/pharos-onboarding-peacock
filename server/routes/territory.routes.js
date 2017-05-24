import { Router } from 'express';
import * as TerritoryController from '../controllers/territory.controller';
const router = new Router();

// Get all Territory Info
router.route('/territory').get(TerritoryController.getTerritories);

// Get one territory and edit it
router.route('/territory').post(TerritoryController.editTerritory);

export default router;
