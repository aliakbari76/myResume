import React from 'react';
import pdffile from "../../assets/pdfs/cv.pdf"
const DownloadPDFButton = () => {
  const handleDownloadPDF = async () => {
    try {
      const response = await fetch(pdffile);
      const pdfBlob = await response.blob();

      const link = document.createElement('a');
      link.href = URL.createObjectURL(pdfBlob);
      link.download = 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <button id="button_p" className="ac_btn btn " onClick={handleDownloadPDF}>
        Download My Resume
    <div className="ring one"></div>
    <div className="ring two"></div>
    <div className="ring three"></div>
  
      
    </button>
  );
};

export default DownloadPDFButton;
