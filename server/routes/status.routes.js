import { Router } from 'express';
import * as StatusController from '../controllers/status.controller';
const router = new Router();

// Get all Territory Info
router.route('/status').get(StatusController.getStatuses);

// Get one territory and edit it
router.route('/status').post(StatusController.editStatuses);

export default router;
