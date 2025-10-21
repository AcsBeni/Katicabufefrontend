import { StatProduct } from "./statProduct";

export interface Stats{
    usersCount:number,
    productsCount:number,
    salesSum:number,
    priceSum:number,
    products:StatProduct[]
}