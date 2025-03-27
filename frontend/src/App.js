import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// components
import PromptBox from "./components/PromptBox"
import DataSelector from './components/DataSelector';
import FileUploader from './components/FileUploader';

function App() {


  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <DataSelector />
      <PromptBox />
    </div>
  );
}

export default App;
