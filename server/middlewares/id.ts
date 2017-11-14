import * as shortid from 'shortid';
import * as express from 'express';

export const ranID = function(req: express.Request, res: express.Response, next: express.NextFunction){
    if (!req.body){
        throw new Error;
    }
    
    req.body.id = shortid.generate();
    next(); 
};