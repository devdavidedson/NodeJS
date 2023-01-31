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
        age: 90,
        lastName: "Freitas",
        showOld
    })
});

router.get('/contato', (req: Request, res: Response) => {
    res.send(`Formulário de contato `)
});

router.get('/sobre', (req: Request, res: Response) => {
    res.send(`Página institucional sobre a empresa`)
});

export default router;