import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{
    const users = await User.find({})

    res.render('pages/home', {
        users
    });
};