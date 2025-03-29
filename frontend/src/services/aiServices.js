export const fetchAIResponse = async (data, prompt) => {
    console.log("fetching AI response...");
    try {

        // request headers
        const headers = {
            "Content-Type": "application/json",
        };

        // request options
        const requestOptions = {
            method: "POST",
            headers: headers,
        };

        requestOptions.body = JSON.stringify({
            prompt: prompt,
            data: data,

        });

        const url = process.env.REACT_APP_LF_AI;
        const response = await fetch(url, requestOptions);

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error("Lambda function call failed!", response);
        };
    } catch (error) {
        console.log("error:", error);
    };

}

