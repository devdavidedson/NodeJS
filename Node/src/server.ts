import express, {Request, Response} from 'express';
import path from 'path';
import mainRoutes from './Routes/index';

const server = express();

server.use(express.static(path.join(__dirname,'../public')))

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Page not Found!')
});

server.listen(80);