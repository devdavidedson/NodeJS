import express from 'express';
import mainRoutes from './Routes/index';
import mainPainel from './Routes/painel';

const server = express();

server.use('/', mainRoutes);
server.use('/painel',mainPainel);

server.listen(80);