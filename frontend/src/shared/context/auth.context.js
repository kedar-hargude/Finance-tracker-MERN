import { createContext } from "react";

export const MyAuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
})