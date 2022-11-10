function run(){
    let html_Code=document.querySelector(".container  #htmlCode").value;
    let css_Code="<style>"+document.querySelector(".container  #cssCode").value+"</style>";
    let jsCode=document.querySelector(".container  #javascriptCode").value;
    let output= document.querySelector(".iframe-container  #viewer");
    // console.log(htmlCode,cssCode,jsCode);
    output.contentDocument.body.innerHTML=html_Code+css_Code;
    output.contentWindow.eval(jsCode);
    
}
document.querySelector(".container  #htmlCode").addEventListener("keyup", run);
document.querySelector(".container #cssCode").addEventListener("keyup", run);
document.querySelector(".container #javascriptCode").addEventListener("keyup", run);