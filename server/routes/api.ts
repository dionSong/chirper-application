import { Router } from 'express';
import chilis from './chilis'

const router = Router();

router.use('/chilis', chilis)

export default router;