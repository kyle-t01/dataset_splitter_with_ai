// acting as storage to store important global variables and state
// not the best way if aiming for extensibility, but will do given small scope
import { useContext, createContext, useEffect, useState } from "react";


const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    const [prompt, setPrompt] = useState("");
    const [responseAI, setResponseAI] = useState(null);
    const [file, setFile] = useState(null);
    const [option, setOption] = useState(0);
    const options = ["language-flash-cards", "unorganised-to-do-list", "sample-dataset3", "upload your own!"];

    return (
        <GlobalContext.Provider
            value={{
                prompt, setPrompt,
                responseAI, setResponseAI,
                file, setFile,
                option, setOption,
                options,
            }}>
            {children}
        </GlobalContext.Provider>
    );
}

// export the context 
export const GlobalVars = () => {
    return useContext(GlobalContext)
}