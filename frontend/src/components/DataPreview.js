// component where user can preview dataset
import { useState, useEffect } from "react";
import { GlobalVars } from "../context/GlobalContext";



const DataPreview = () => {
    const { option, setOption } = GlobalVars();
    const { options } = GlobalVars();
    const { file } = GlobalVars();
    const [isLoading, setIsLoading] = useState(false);
    const { lines, setLines } = GlobalVars();
    const [numRows, setNumRows] = useState(10);

    useEffect(() => {
        readFile()
    }, [file]);


    // read an entire text file into lines
    const readFile = () => {

        if (!file) { console.log("no file detected!"); return; }
        setLines(null);
        const reader = new FileReader();
        reader.readAsText(file)
        reader.onload = (e) => {
            const rawData = e.target.result;
            // split, then filter lines
            const splitLines = rawData.split(/\r?\n/);
            const readLines = splitLines.filter(line => line.trim() !== "");
            setLines(readLines);

        }

    }




    const renderRows = () => {
        if (numRows > 20 || numRows < 0) {
            console.log("choose a row num between 0 and 20")
            return;
        }
        // if no file, return nothing for now;
        if (!lines) return;

        const maxLines = Math.min(numRows, lines.length);
        // TODO: for future, allow users to select where to start data
        const displayLines = lines.slice(0, maxLines);
        // if a file wasn't selected, then display own data
        return (
            <div>
                {displayLines.map((l, i) => renderRow(l, i))}
            </div>
        );
    }

    const renderRow = (l, i) => {

        return (
            <label key={i}>
                <div className="line">
                    <p>[{i}]: {l}</p>

                </div>
            </label>
        );
    }

    const renderDataPreview = () => {

        return (
            <div>
                {renderRows()}
            </div>

        )
    }



    return (
        <div className="data-preview">
            <h1>Data Preview</h1>
            {renderDataPreview()}

        </div>
    );
}


export default DataPreview;