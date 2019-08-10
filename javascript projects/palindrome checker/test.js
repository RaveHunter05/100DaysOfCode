comparacion=()=>{
    var palabra=prompt("Please enter a word");
    var resultado=palabra.match(/[a-z0-9]/ig);
    var resultado1=[...resultado];
    var contador=0;

    for (const asdf in resultado1) {
        if(resultado1[asdf].toLowerCase()==resultado1[resultado.length-1-asdf].toLowerCase()){
            contador++;
        }else{
            contador--;
        }
        
    }

    if(contador==resultado1.length){
        alert("si es palindrome");
    }else{
        alert("no es palindrome");
    }

   

    
}