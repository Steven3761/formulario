
// funcion para validar edad y precio a pagar por genero

function validar(){
    let genero, nombre

    genero = document.getElementById('genero').value
    nombre = document.getElementById('nombre').value
    edad = document.getElementById('edad').value
    
    
    if (edad>=18) {

        alert("Puede ingresar")

        if (genero == 0){
            alert("Hola"+" "+nombre+" "+"debes pagar $35.000 COP")
        } else {
            alert("Hola"+" "+nombre+" "+"debes pagar $20.000 COP")
        }


    } else {
        alert("No Puede ingresar")
    }

}

// seccion ciclo for +2 y +3
for (let index = 0; index <= 50; index+=2){
    console.log("For+2:"+index)
}
for (let index = 0; index <= 50; index+=3){
    console.log("For+3:"+index)
}


// seccion ciclo while +2 y +3
let index = 0
while(index<=50){
    console.log("While+2:"+index)
    index +=2
}

let index2 = 0
while(index2<=50){
    console.log("While+3:"+index2)
    index2 +=3
}
