const cvURL = "./Yousef Refaat CV.pdf"
const downloadCv = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = cvURL;
    downloadLink.target = "_blank"
    downloadLink.download = 'Yousef Refaat CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
} 