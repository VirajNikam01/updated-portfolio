var theme = document.querySelector(".nav-btn i ")
var body = document.querySelector("body")
var title = document.querySelector('#container-one h3 span')

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
function toogleTheme() {
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
}
toogleTheme()
function autoType() {
    const wordList = ['Developer.', 'designer.']
var wordIndex = 0;
var characterIndex = 0;
var reverseType = false
let skipUpdate = 0;
setInterval(()=>{
    if (skipUpdate) {
        skipUpdate--
        return
    }
    if (!reverseType) {
        skipUpdate = 2
        title.innerText = title.innerText + wordList[wordIndex][characterIndex]
    characterIndex++

    }else{
        title.innerText = title.innerText.slice(0, title.innerText.length-1)
        characterIndex--
    }
    if (characterIndex === wordList[wordIndex].length ) {
        skipUpdate = 8
        reverseType = true
    }
    if (title.innerText.length === 0 && reverseType) {
        reverseType = false
        wordIndex++
    }
    if (wordIndex === wordList.length ) {
        wordIndex = 0
    }
    
}, 60)
}
autoType()