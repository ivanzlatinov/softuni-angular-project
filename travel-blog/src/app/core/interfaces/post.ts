import { IUser } from "./user";

export interface IPost {
   _id: string,
   destination: string,
   title: string,
   cost: number,
   duration: string, 
   imgUrl: string,  
   description: string,
   _ownerId: IUser,

}