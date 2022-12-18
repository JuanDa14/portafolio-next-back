import { Router } from 'express';
import { seedData } from '../controllers';
import { validationOrigin } from '../middlewares';

const router = Router();

router.get('/', validationOrigin, seedData);

export default router;
