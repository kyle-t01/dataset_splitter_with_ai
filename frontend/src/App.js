import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// components
import PromptBox from "./components/PromptBox"

function App() {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {

  }, []);

  const handleOnResponse = async (res) => {
    console.log("handle on response")
    if (!res) {
      console.log("NO response")
      return;
    }
    console.log("response object", res);
  }

  const handleOnPromptChanged = () => {
    console.log("prompt changed")
  }

  return (
    <div className="App">
      <h1>Prompt Box</h1>
      <PromptBox onReponse={handleOnResponse} onPromptChanged={handleOnPromptChanged} />
    </div>
  );
}

export default App;
