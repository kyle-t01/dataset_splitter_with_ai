// component where user can select datasets
import { useState } from "react";



const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // max file size in kb
    const maxFileSize = 300;


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

        // preview

        setFile(selectedFile)
        return;
    }

    const handleUploadFile = () => {
        console.log("file uploaded")
    }

    return (
        <div className="file-uploader">

            <input
                type="file"
                accept=".csv,.tsv,.txt"
                onChange={handleFileChange}

            />
            {/* todo: consider app.js to handle file upload itself */}
            <button onClick={handleUploadFile}>Upload</button>

        </div>
    );
}


export default FileUploader;