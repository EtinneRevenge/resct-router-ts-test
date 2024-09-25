import { useContext } from "react"
import { authContext } from "./authContext"

export function Header() {

    const { isLogin } = useContext(authContext)



    return <h1>{isLogin ? 'Hi' : 'please Login'}</h1>
}