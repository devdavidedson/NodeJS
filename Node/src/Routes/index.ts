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

export default router;