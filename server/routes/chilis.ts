import { Router } from 'express';
import * as express from 'express';


//Procedures
import { oneChili } from '../procedures/procedures';
import { all } from '../procedures/procedures';
import { create } from '../procedures/procedures';
import { destroy } from '../procedures/procedures';
import { update } from '../procedures/procedures';

//Midlewares
import { ranID } from '../middlewares/id';


const router = Router();


router
    .get('/', all)
    .get('/:id', oneChili)
    .post('/', ranID, create)
    .delete('/:id', destroy)
    .put('/:id', update)
    

export default router;