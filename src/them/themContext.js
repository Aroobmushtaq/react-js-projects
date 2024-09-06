import { useContext,createContext } from "react";
export const ThemContext=createContext({
    themMode:'light',
    lightMode:()=>{},
    darkMode:()=>{},
})
export const ThemProvider=ThemContext.Provider
export default function useThem(){
    return useContext(ThemContext)
}