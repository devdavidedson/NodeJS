import validator from "validator";

let name: string = 'dayanne freitas';

if(validator.isLowercase(name)) {
    console.log(`A String ${name} está toda minúscula`)
} else {
    console.log(`A String ${name} NÃO É toda minúscula`)
};