// component where user can select datasets
import { useState } from "react";
import FileUploader from "./FileUploader";
import { GlobalVars } from "../context/GlobalContext";



const DataSelector = () => {
    const { option, setOption } = GlobalVars();
    const { options } = GlobalVars();
    const [isLoading, setIsLoading] = useState(false);
    // max file size in kb
    const maxFileSize = 300;


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