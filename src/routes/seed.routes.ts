import { Router } from 'express';
import { seedData } from '../controllers';
import { validationUrl } from '../middlewares';

const router = Router();

router.get('/', validationUrl, seedData);

export default router;
