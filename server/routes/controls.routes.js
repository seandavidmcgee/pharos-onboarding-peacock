import { Router } from 'express';
import * as ControlsController from '../controllers/controls.controller';
const router = new Router();

// Get all Territory Info
router.route('/controls').get(ControlsController.getControls);

// Get one territory and edit it
router.route('/controls').post(ControlsController.editControls);

export default router;
