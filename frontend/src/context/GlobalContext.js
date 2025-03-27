// acting as storage to store important global variables and state
import { useContext, createContext, useEffect, useState } from "react";


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [prompt, setPrompt] = useState("");
    //const [file, setFile] = useState(null);

    return (
        <GlobalContext.Provider
            value={{ prompt, setPrompt }}>
            {children}
        </GlobalContext.Provider>
    );
}

// export the context 
export const GlobalVars = () => {
    return useContext(GlobalContext)
}