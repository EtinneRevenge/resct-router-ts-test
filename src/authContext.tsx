import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";


export interface IContext {
    isLogin: boolean
    setIsLogin: null | Dispatch<SetStateAction<boolean>>
}

export const authContext = createContext<IContext>({
    isLogin: false,
    setIsLogin: null,
})

export const authProvider = ({ children }: PropsWithChildren) => {

    const [isLogin, setIsLogin] = useState(false);

    return (<authContext.Provider value={
        {
            isLogin,
            setIsLogin
        }
    }>

        {children}
    </authContext.Provider>)
}