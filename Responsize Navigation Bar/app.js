const menu=document.querySelector(".menu_icon")
menu.addEventListener("click",()=>{
    document.querySelector(".menu_i").classList.toggle("open");
    document.querySelector(".menu_drop").classList.toggle("close")
})