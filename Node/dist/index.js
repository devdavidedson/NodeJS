"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let name = 'dayanne';
if (validator_1.default.isLowercase(name)) {
    console.log(`A String ${name} está toda minúscula`);
}
else {
    console.log(`A String ${name} NÃO É toda minúscula`);
}
;
