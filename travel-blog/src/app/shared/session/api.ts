import { IUser } from "src/app/core/interfaces";


export const setSession = ({ _id, email, username, accessToken}: IUser) => {

    const user = { _id, email, username, accessToken};
    sessionStorage.setItem("User", JSON.stringify(user));
    localStorage.setItem("User", JSON.stringify(user));
    
}

export const getSession = () => {
    const session = sessionStorage.getItem('User')
    const local = localStorage.getItem('User');
    return (
        session ? JSON.parse(session) : null,
        local ? JSON.parse(local): null
    )
}


export const logoutSession = () => {
    sessionStorage.removeItem('User');
    localStorage.removeItem('User');
}