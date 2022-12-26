let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        try{
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            document.querySelector('.input').value="";
            string="";
        }
        else{

            string+=e.target.innerHTML;
            document.querySelector('input').value=string;
        }}
        catch(err){
            document.querySelector('.input').value="";
            string="";
            console.error(err);
        }
    })
})