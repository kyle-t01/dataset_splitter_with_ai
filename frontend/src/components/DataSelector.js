// component where user can select datasets
import { useState } from "react";
import FileUploader from "./FileUploader";



const DataSelector = () => {
    const [option, setOption] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    // max file size in kb
    const maxFileSize = 300;
    const options = ["language-flash-cards", "unorganised-to-do-list", "sample-dataset3", "upload your own!"];

    const handleChangeOption = (val) => {
        setOption(val);
    }

    const renderOptions = () => {
        return (
            <div>
                {options.map((_, i) => renderOption(i))}
            </div>

        )
    }

    const renderOption = (i) => {
        return (
            <label key={i}>
                <input
                    type="radio"
                    name="dataset"
                    checked={option == i}
                    onChange={() => handleChangeOption(i)}
                />
                {options[i]}
            </label>
        );
    }

    const renderFileUploader = () => {
        if (option != options.length - 1) return;
        return (
            <FileUploader />
        );
    }

    return (
        <div className="data-selector">
            <h1>Select Dataset</h1>
            {renderOptions()}
            {renderFileUploader()}
        </div>
    );
}


export default DataSelector;