let input = document.getElementById('showBox');
let keys = document.querySelectorAll('button');
let string = '';

keys.forEach(item =>{
    item.addEventListener('click', (a)=>{
        if(a.target.innerText == '='){
            string = String(eval(string));
            input.value = string;
        }
        else if (a.target.innerText == 'AC'){
            string = '';
            input.value = string;
        }
        else if(a.target.innerText == 'C'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }       
        else{
            string += a.target.innerText;
            input.value = string;
        }
    })
})