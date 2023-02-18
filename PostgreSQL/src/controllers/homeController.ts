import { query, Request, response, Response } from 'express';

import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    
    const users = await User.findAll();

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let query: string = req.query.q as string;
    
    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(parseInt(query));

    res.render('pages/home', {
        name: 'David',
        lastName: 'Edson',
        showOld,
        frasesDoDia: [],
        products: list,
        expensives: expensiveList,
        users
    });
};

export const novoUsuario = async (req: Request, res: Response) => {
    let { name, age } = req.body;

    if (name) {
        const newUser = User.build({ name });

        if (age) {
            newUser.age = parseInt(age)
        }

        await newUser.save()
    }

    res.redirect('/');
}
