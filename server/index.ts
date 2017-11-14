import * as path from 'path';
import * as express from 'express';
import * as bp from 'body-parser';


//Routes
import api from './routes/api';
const app = express();

//Paths
export const pathVar = path.join(__dirname, 'data.json');
const distPath = path.join(__dirname, '..','picante', 'dist');
console.log(distPath);




app
    .use(bp.json())
    .use(bp.urlencoded({ extended: true }))
    .use('/api', api)
    .use('/', express.static(distPath, { redirect: false }))
    .get('/*', (req: express.Request, res: express.Response) => {
        res.sendFile(path.join(distPath, 'index.html'));
    })

    .listen(3000, () => {
        console.log('listening on port 3000');
    });
    

    

