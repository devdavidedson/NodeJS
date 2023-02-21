import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    
    /* const newUsers = new User();
        newUsers.name = {firstName: 'Denia', lastName: 'Casimiro'};
        newUsers.email = 'deniacasimiro@hotmail.com';
        newUsers.age = 21;
        newUsers.interests.push('Viajar', 'Comer', 'Tecnologia');

        const resultado = await newUsers.save(); 

        console.log('NOVO USUARIO', resultado); */

    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};