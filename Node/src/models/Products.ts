type Product = {
    title: String,
    price: Number
};

const data: Product[] = [
    {title:'Produto X', price: 10},
    {title:'Produto Y', price: 14},
    {title:'Produto Z', price: 18},
    {title:'Produto G', price: 6},
];

export const Product = {
    getAll: (): Product[] => {
        return data;
    },
    getFromPriceAfter: (price: Number):Product[] => {
        return data.filter( item => item.price >= price);
    }
};