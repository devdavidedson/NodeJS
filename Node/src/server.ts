import express, {Request, Response} from 'express';

const server = express();

// GET, POST, PUT, DELETE são os metodos mais usados

server.get('/', (req: Request, res: Response) => {
    res.send('Olá Mundo!');
})

//Exemplo de rota Dinamica

server.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug;
    res.send(`Noticia: ${slug}`);
})

// Exemplo de rota Dinamica 2 elementos

server.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    
    let {origem, destino} = req.params;
    res.send(`Passagens Aereas de ${origem.toUpperCase()} para ${destino.toUpperCase()}`)
})

server.listen(80)