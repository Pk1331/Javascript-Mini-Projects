let data=document.getElementById("content");
let word_count=document.getElementById("word-count");
let char_count=document.getElementById("char-count");
let content=''
console.log(char_count)
data.addEventListener('input',
    ()=>{
        content=data.value;
        char_count.innerHTML=content.length;
        word_count.innerHTML=content.trim().split(/\s+/).length; 
    }
)