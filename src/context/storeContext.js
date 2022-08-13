import { createContext, useState } from "react";

export const StoreContext = createContext()

const StoreContextProvider = ({children}) => {
    const [menuActive, setMenuActive] = useState('home')
    const [contactValue, setContactValue] = useState('1212212333')

    return <StoreContext.Provider value={{
        menuActive,
        setMenuActive,
        contactValue,
        setContactValue,
    }}>
        {children}
    </StoreContext.Provider>
}

export default {
    StoreContextProvider,
    StoreContext,
}