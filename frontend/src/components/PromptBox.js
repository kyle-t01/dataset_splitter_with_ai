// component where user queries are sent 
import { useState } from "react";
import { fetchAIResponse } from "../services/aiServices";
import { GlobalVars } from "../context/GlobalContext";



const PromptBox = () => {

    // global state
    const { prompt, setPrompt } = GlobalVars();
    const { setResponseAI } = GlobalVars();
    const { lines, setLines } = GlobalVars();

    // local state
    const [isLoading, setIsLoading] = useState(false);
    const maxChars = 300;

    const handleSubmitPrompt = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("handleSubmitPrompt() called for prompt:", prompt);
        // send user prompt, and get a response
        // try-catch
        const response = await fetchAIResponse(lines, prompt);
        if (response) {
            console.log("got a response: ", response)
            setResponseAI(response)
        }

        setIsLoading(false);
    }
    return (
        <div className="prompt-bar">
            <h1>Prompt Box</h1>
            <textarea
                className="input"
                type="text"
                placeholder="Enter instructions on how data should be split here..."
                value={prompt}
                onChange={(e) => { setPrompt(e.target.value) }}
                rows={4}
                maxLength={maxChars}
            />
            <div className="char-counter">
                {prompt.length} / {maxChars}
            </div>
            <button className="button" onClick={handleSubmitPrompt} disabled={isLoading}>
                {isLoading ? "A.I. responding..." : "Send"}

            </button>
        </div>
    );

}

export default PromptBox;