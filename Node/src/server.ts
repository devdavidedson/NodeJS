import express, {Request, Response} from 'express';
import mainRoutes from './Routes/index';

const server = express();

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
    res.status(404).send('Page not Found!')
});

server.listen(80);