// component where user queries are sent 
import { useState } from "react";
import { fetchAIResponse } from "../services/aiServices";


const PromptBox = ({ onResponse, onPromptChanged }) => {
    const [prompt, setPrompt] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const maxChars = 300;

    const handleSubmitPrompt = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log("handleSubmitPrompt() called");
        // send user prompt, and get a response
        // try-catch
        const response = await fetchAIResponse("null");
        if (response) {
            onResponse(response)
        }
        console.log(response);
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
                // onChange, also do onPromptChanged
                onChange={(e) => { setPrompt(e.target.value); onPromptChanged(e.target.value) }}
                rows={3}
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