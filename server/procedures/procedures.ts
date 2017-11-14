import * as express from 'express';
import * as fs from 'fs';
import  { pathVar } from "../index";


export const all = (req: express.Request, res: express.Response) => {
    fs.readFile(pathVar, 'utf-8', function (err, file) {
        var pP = JSON.parse(file);
        res.json(pP); 
    });    
};

export const oneChili = (req: express.Request, res: express.Response) => {
        fs.readFile(pathVar, 'utf-8', function (err, file) {
            var parsedArray = JSON.parse(file);
            var found = parsedArray.filter(function (chili: any) { return chili.id === req.params.id; });
            
            var chili = found[0];
            res.send(chili).end();
        });
};

export const create = (req: express.Request, res: express.Response) => {
    fs.readFile(pathVar, 'utf-8', function (err, file) {
        var parsedFile = JSON.parse(file);
        var chili = req.body;

        parsedFile.push(chili);
        fs.writeFile(pathVar, JSON.stringify(parsedFile), function (err) {
            if (err)
                throw err;
            res.status(201).send(chili).end();
        });
    });
};

export const destroy = (req: express.Request, res: express.Response) => {
    fs.readFile(pathVar, 'utf-8', function (err, file) {
        var fileParsed = JSON.parse(file);
        var foundIndex = -1;
        fileParsed.map(function (chili: any, i: number) {
            if (chili.id === req.params.id) {
                foundIndex = i;
            }
        });
        if (foundIndex === -1) {
            res.status(404).end();
            return;
        }
        fileParsed.splice(foundIndex, 1);
        fs.writeFile(pathVar, JSON.stringify(fileParsed), 'utf-8', function (err) {
            if (err)
                throw err;
            
            res.status(202).end();
        });
    });
};

export const update = (req: express.Request, res: express.Response) => {
    fs.readFile(pathVar, 'utf-8', function (err, file) {
        var parsedArray = JSON.parse(file);
        var found = parsedArray.filter(function (chili: any) { return chili.id === req.params.id; });
        
        var chili = found[0];
        console.log(found[0]);
        let definitiveId = found[0].id

        var foundIndex = -1;
        parsedArray.map(function (chili: any, i: number) {
            if (chili.id === req.params.id) {
                foundIndex = i;
            }
        });
        if (foundIndex === -1) {
            res.status(404).end();``
            return;
        }
        parsedArray.splice(foundIndex, 1);
        
        let newchili = req.body;

         chili = newchili;

         chili.id = definitiveId;
         
         parsedArray.push(chili);
         fs.writeFile(pathVar, JSON.stringify(parsedArray), function (err) {
            if (err)
                throw err; 
        });
        res.send(chili).end();
    }); 
};



