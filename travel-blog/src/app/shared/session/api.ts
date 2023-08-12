import { IUser } from "src/app/core/interfaces";


export const setSession = ({ _id, email, username, accessToken}: IUser) => {

    const user = { _id, email, username, accessToken};
    sessionStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("User", JSON.stringify(user));
    
}


export const logoutSession = () => {
    sessionStorage.removeItem('User');
    localStorage.removeItem('User');
}