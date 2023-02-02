import { Request, Response } from "express";

import { Product } from "../models/Products";

export const home =  (req: Request, res: Response) => {
    let age: number = 90;
    let showOld = false;
    
    if (age > 50) {
        showOld = true
    }
    
    let list = Product.getAll();
    let expansiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Dayanne',
        LastName: 'Freitas',
        showOld,
        products: list,
        expensive: expansiveList,
        FrasesDoDia: [
        ]
    })
};