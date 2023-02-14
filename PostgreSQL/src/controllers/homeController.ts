import { Request, Response } from 'express';

import { User } from '../models/User';
import { Product } from '../models/Product';
import { Op } from 'sequelize';

export const home = async (req: Request, res: Response)=>{
    const searchName: string = 'Da';
    
    let users = await User.findAll({
        where: {
            name: {
                [Op.like]: `%${searchName}%`
            }
        }
    });

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
        users
    });
};