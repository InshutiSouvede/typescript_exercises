import { loyalty } from "./enums";
import { Country } from "./types";
export interface Review{
    name: string; 
    stars: number; 
    loyaltyUser: loyalty; 
    description?:string
    date: string;
}
export interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}