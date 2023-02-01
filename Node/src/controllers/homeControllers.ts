import { Request, Response } from "express";

export const home =  (req: Request, res: Response) => {
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
        FrasesDoDia: [
            'Minha esposa é uma gata e pensa que não é'
        ]
    })
};