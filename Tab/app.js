const history=document.querySelector("[data-btn-history]");
const vision=document.querySelector("[data-btn-vision]");
const goal=document.querySelector("[data-btn-goal]");
const content=document.querySelector(".content")
history.addEventListener("click",()=>{
    moveToHistory()
})
vision.addEventListener("click",()=>{
    moveToVision()
})
goal.addEventListener("click",()=>{
  
    moveToGoal()
})

const moveToHistory=()=>{
    content.style.cssText="--transform-percen:0%;"
    clearActive()
    history.classList.add("active")
}
const moveToVision=()=>{
    content.style.cssText="--transform-percen:-100%;"
    clearActive()
    vision.classList.add("active")
}
const moveToGoal=()=>{
    content.style.cssText="--transform-percen:-200%;"
    clearActive()
    goal.classList.add("active")
}
const clearActive=()=>{
    document.querySelectorAll(".btn").forEach((item)=>{
        if(item.classList.contains("active")){
            item.classList.remove("active")
        }
    })
}