import { IUser } from "src/app/core/interfaces";


export const setSession = ({ _id, email, accessToken}: IUser) => {

    const user = { _id, email, accessToken};
    sessionStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("User", JSON.stringify(user));
    
}