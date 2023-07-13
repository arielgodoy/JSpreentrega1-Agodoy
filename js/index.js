let variable = 0

for (variable =0; variable <= 15; variable++) {

 if (variable< 5)
    {
    console.log("La variabke es menor a 5 la variable es : " + variable)
    }
else if (variable == 10 ) 
    {
    console.log ("la varibale es igual a : " + variable)
    }
else 
    {
    console.log("la variable no cumple ninguna condicion anterior")
    
    }

} // fin del for

variable = 0
do {
    variable++;
    console.log("esto se imprime 10 veces , impresion Nro:"+variable)
    switch(variable){
        case 5: console.log("vamos a la mitad");break;
        case 9: console.log("una mas y terminamos");break;
        default:break;

    }


    
}while(variable < 10)

