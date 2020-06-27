import * as express from "express";
import { Request, Response } from "express";

const router=express.Router()

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
router.get('/:pid', (req :Request, res:Response, next) => {
    console.log('product route');
    const productId = req.params.pid
    const product=inventory.find(product=>product.id==parseInt(productId))
    res.json(product)
})
router.get('/', (req :Request, res:Response, next) => {
   
    res.json(inventory)
})

export default router;