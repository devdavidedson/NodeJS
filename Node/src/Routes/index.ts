import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 90;
    let showOld = false;
    
    if (age > 50) {
        showOld = true
    }
    
    res.render('pages/home', {
        name: 'Dayanne',
        LastName: 'Freitas',
        showOld,
        products:[
            {title:'Produto X', price:'10'},
            {title:'Produto Y', price:'14'},
            {title:'Produto Z', price:'18'}
        ],
        FrasesDoDia: []
    })
});

router.get('/contato', (req: Request, res: Response) => {
    res.render('pages/contato')
});

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/sobre')
});

router.get('/nome', (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        nome
    });
});

router.get('/idade', (req: Request, res: Response) => {
    res.render('pages/idade');
});

router.post('/idade-resultado', (req: Request, res: Response) => {
    let idade: number =0;
    let mostrarIdade: boolean = false;

    if (req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
});

export default router;