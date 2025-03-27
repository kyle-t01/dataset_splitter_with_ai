import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// components
import PromptBox from "./components/PromptBox"
import DataSelector from './components/DataSelector';

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

  const handleOnPromptChanged = (text) => {
    setPrompt(text);
    console.log(prompt)
  }

  return (
    <div className="App">
      <DataSelector />
      <PromptBox onResponse={handleOnResponse} onPromptChanged={handleOnPromptChanged} />
    </div>
  );
}

export default App;
