import { Router } from 'express';
import * as ProtectionController from '../controllers/protection.controller';
const router = new Router();

// Get all Territory Info
router.route('/protection').get(ProtectionController.getProtections);

// Get one territory and edit it
router.route('/protection').post(ProtectionController.editProtections);

export default router;
