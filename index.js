const menu_bar=document.querySelector(".menu_bars")
const menu=document.querySelector(".menu")
const close=document.querySelector(".close")
const body=document.querySelector("body")

const li=document.querySelectorAll("li")
li.forEach((obj)=>{
    obj.addEventListener("click",()=>{
        menu.style.left="-300px"
body.style.backgroundColor="#ffff"
    })
})
console.log(li)
menu_bar.addEventListener("click",()=>{
        menu.style.left="0"
        body.style.backgroundColor="rgba(30, 28, 28, 0.637)"

})
close.addEventListener("click",()=>{
    menu.style.left="-300px"
body.style.backgroundColor="#ffff"
})