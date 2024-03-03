const tasu=document.querySelector('.tasu');
const hiku=document.querySelector('.hiku');
function purasu(){
    const number=document.querySelector('.number');
    if(parseInt(number.textContent)===10){
        alert('これ以上出力できません');
    }
    else{
    number.textContent=parseInt(number.textContent)+1;
}
}
function mainasu(){
    const number=document.querySelector('.number');
    if(parseInt(number.textContent)===0){
        alert('これ以上はいけません');
    }
    else{
 number.textContent=parseInt(number.textContent)*parseInt(number.textContent);
    }
}

tasu.addEventListener('click',purasu);
hiku.addEventListener('click',mainasu);
