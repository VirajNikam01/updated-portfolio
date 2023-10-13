var theme = document.querySelector(".nav-btn i ")
var body = document.querySelector("body")

function backToTop(){
    var btn = document.querySelector("footer")
const scrollToTop = ()=>{
    window.scroll({
        top:0,
        behavior:'smooth',
    });
};

btn.addEventListener('click', ()=>{
    scrollToTop()
})
}
backToTop()

var dark = false
theme.addEventListener("click", ()=>{
   if (!dark) {
    body.classList.add('dark')
    dark = true;
   }else{
    body.classList.remove('dark')
    dark = false;
   }
})
