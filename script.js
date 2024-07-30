document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'assets/sample.zip'; // Path to the ZIP file in the assets folder
    link.download = 'sample.zip'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
