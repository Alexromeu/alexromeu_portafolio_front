export function downloadFile(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download = "Alexander_Romeu_resume.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
