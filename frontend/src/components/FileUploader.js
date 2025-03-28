// component where user can select datasets
import { useState } from "react";
import { GlobalVars } from "../context/GlobalContext";



const FileUploader = () => {
    const { file, setFile } = GlobalVars()
    const [isLoading, setIsLoading] = useState(false);
    // max file size in kb
    const maxFileSize = 93;

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (!selectedFile) return;
        if (["text/plain", "text/csv", "text/tsv"].includes(selectedFile.type) == false) {
            alert("only .csv, .tsv, or .txt files are allowed!")
            e.target.value = null;
            setFile(null)
            return;
        }

        // todo, more file validation checks


        // file size
        const fileSizeKB = selectedFile.size / 1024;
        if (fileSizeKB > maxFileSize) {
            alert(`File size must not exceed ${maxFileSize}KB!`)
            e.target.value = null;
            setFile(null)
            return;
        }

        // preview

        setFile(selectedFile)
        return;
    }

    const renderFileSize = () => {
        if (!file) return;

        return (
            <p>File size (must not exceed {maxFileSize} KB): {(file.size / 1024).toFixed(2)} KB</p>
        );
    }


    return (
        <div className="file-uploader">

            <input
                type="file"
                accept=".csv,.tsv,.txt"
                onChange={handleFileChange}
            />
            {renderFileSize()}
        </div>
    );
}


export default FileUploader;