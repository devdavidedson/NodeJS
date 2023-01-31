import { Router, Request, Response } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    let age: number = 90;
    let showOld = false;
    
    if (age > 50) {
        showOld = true
    }
    
    res.render('home', {
        name: 'Dayanne',
        age,
        showOld,
        products:[
            {title:'Produto X', price:'10'},
            {title:'Produto Y', price:'14'},
            {title:'Produto Z', price:'18'}
        ],
        FrasesDoDia: [
            'Motive-se pq não cai do céu',
            'Ninguém vai fazer por você'
        ]
    })
});

router.get('/contato', (req: Request, res: Response) => {
    res.send(`Formulário de contato `)
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send(`Página institucional sobre a empresa`)
});

export default router;