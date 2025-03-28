import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// components
import PromptBox from "./components/PromptBox"
import DataSelector from './components/DataSelector';
import FileUploader from './components/FileUploader';
import DataPreview from './components/DataPreview';

function App() {


  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <DataSelector />
      <DataPreview />
      <PromptBox />
    </div>
  );
}

export default App;
