
import { Request, Response } from "express";
import HttpError from "../models/http-error";

const inventory = [
    {
        id: 1,
        name: 'oxford-dict',
        price: 200,
        currency:'Rs',
    },
    {
        id: 2,
        name: 'abc Novel',
        price: 400,
    },
    {
        id: 3,
        name: 'Notebook',
        price: 70,
        currency:'Rs',
    },
]

export const getProductById=(req :Request, res:Response, next) => {
    console.log('product route');
    const productId = req.params.pid
    const product = inventory.find(product => product.id == parseInt(productId))
    if (!product) {
        next(new HttpError('Product for the requested id not found',404));
    }
    res.json(product)
}

export const getAllProducts= (req :Request, res:Response, next) => {
    res.json(inventory)
}

export const createProduct=(req :Request, res:Response, next) => {
    const { name, price, currency } = req.body;
    let product = {
        id: Math.floor(Math.random() * 100),
        name,
        price,
        currency
    }
    inventory.push(product);
    res.status(201).json(product)
}
export const updateProduct=(req :Request, res:Response, next) => {
    const { name, price, currency } = req.body;
    const productId = parseInt(req.params.pid);

    const updateProduct = { ...inventory.find(product => product.id == productId) }
    const productIndex = inventory.findIndex(product => product.id == productId)
    
    updateProduct.name = name;
    updateProduct.price = price;
    updateProduct.currency = currency;

    inventory[productIndex]=updateProduct
   
    res.status(201).json({product:updateProduct})

}