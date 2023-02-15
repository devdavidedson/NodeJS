import { Request, Response } from 'express';

import { User } from '../models/User';
import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{
    /* build + save
    const user = User.build({
        name: "Sicrano",
    });

    await user.save(); */

    //com Create
    const user = await User.create({
        name: 'Gustava',
        age: 25
    });

    console.log(user.name);
    console.log(user.age);



    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'David',
        lastName: 'Edson',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
    });
};