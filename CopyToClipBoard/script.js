let txt=document.getElementById("txt")
let btn=document.getElementById("btn")
btn.addEventListener("click",()=>{
    navigator.clipboard.writeText(txt.value)
    btn.classList.add("fa-circle-check")
    alert("Text copied")
    setTimeout(()=>{
        btn.classList.remove("fa-circle-check")
        btn.classList.add("fa-clipboard")
    },1000)
})
