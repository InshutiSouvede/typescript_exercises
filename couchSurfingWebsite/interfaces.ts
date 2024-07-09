import { loyalty } from "./enums";
export default interface Review{
    name: string; 
    stars: number; 
    loyaltyUser: loyalty; 
    description?:string
    date: string;
}