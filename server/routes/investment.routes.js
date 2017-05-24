import { Router } from 'express';
import * as InvestmentController from '../controllers/investment.controller';
const router = new Router();

// Get all Territory Info
router.route('/investment').get(InvestmentController.getInvestments);

// Get one territory and edit it
router.route('/investment').post(InvestmentController.editInvestments);

export default router;
