let taskbar = document.getElementsByClassName("taskbar")[0]
let startMenu = document.getElementsByClassName("startMenu")[0]

taskbar.addEventListener("click",()=>{
    console.log("clicked")
    if(startMenu.style.bottom == "52px"){
        startMenu.style.bottom = "-530px"
    }
    else{
        startMenu.style.bottom = "52px"
    }
});
