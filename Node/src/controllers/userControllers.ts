import { Request, Response } from "express";

export const nome =  (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;

    res.render('pages/nome', {
        nome
    });
};

export const idadeInicial =  (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeResultado = (req: Request, res: Response) => {
    let idade: number =0;
    let mostrarIdade: boolean = false;

    if (req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
};