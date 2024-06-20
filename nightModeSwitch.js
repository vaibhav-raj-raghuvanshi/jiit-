function dlSWITCH(){
    if(document.querySelector("body").getAttribute("data-bs-theme")!='dark'){
        document.querySelector("body").setAttribute("data-bs-theme",'dark');
    }
    else{
        document.querySelector("body").setAttribute("data-bs-theme",'light');
    }
}

document.querySelector(".dlSwitch").addEventListener("click",dlSWITCH);