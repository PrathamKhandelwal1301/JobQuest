import React, { useState } from "react";
import { FileUp } from "lucide-react";

const PDFUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      const reader = new FileReader();
      
      reader.onloadend = () => {
        setFile({
          name: uploadedFile.name,
          size: uploadedFile.size,
          type: uploadedFile.type,
          preview: reader.result
        });
      };
      
      reader.readAsDataURL(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="flex items-center justify-start space-x-4">
      <input 
        type="file" 
        accept=".pdf"
        onChange={handleFileUpload}
        className="hidden" 
        id="pdf-upload"
      />
      <label 
        htmlFor="pdf-upload" 
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg 
        hover:bg-blue-600 transition-colors duration-300 cursor-pointer 
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        <FileUp className="w-5 h-5 mr-2" />
        Upload PDF
      </label>

      {file && (
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>{file.name}</span>
          <button 
            onClick={() => setFile(null)}
            className="text-red-500 hover:text-red-700"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default PDFUploader;