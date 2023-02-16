import { Request, Response } from 'express';

import { User } from '../models/User';
import { Product } from '../models/Product';
import { Op } from 'sequelize';

export const home = async (req: Request, res: Response)=>{
       
    let [usuario, created] = await User.findOrCreate({
        where: { name: 'David Edson'},
        defaults: {
            age: 34
        }
    });

    if(created) {
        console.log('usuário criado com sucesso');
    } else {
        console.log("achamos o usuário")
    }
    
    const users = await User.findAll();

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