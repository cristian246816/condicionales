// PARTE 1 

function clic() { 
    let image = document.getElementById("gato_click")

    if (image.style.border == '2px solid red') {
        image.style.border = 'none';
      } else {
        image.style.border = '2px solid red';
      }
}

// PARTE 2

function validar() { 
    let primero = Number(document.querySelector(".primero").value)
    let segundo = Number(document.querySelector(".segundo").value)
    let tercero = Number(document.querySelector(".tercero").value)
    let total = primero + segundo + tercero 
    let mesage = document.querySelector(".mesage")
    mesage.innerHTML = total 

    if (primero < 0 || segundo < 0 || tercero < 0) {
        mesage.innerHTML = "Los valores ingresados deben ser mayores o iguales a 0"
    }
    else if ( total < 10 ) {
        mesage.innerHTML = 'Llevas ' + total + ' stickers!, Toma más stickers, aprovecha!'
    }
    else if (total == 10) {
        mesage.innerHTML = total + ' Has escogido la mayor cantidad de stickers!'
    }
    else {
        mesage.innerHTML = 'Has escogido "más" de 10 stickers!'
    }
}

// PARTE 3

function password() {
    let select1 = document.getElementById("select1").value
    let select2 = document.getElementById("select2").value
    let select3 = document.getElementById("select3").value
    let password = select1 + select2 + select3
    let validador = document.getElementById("validado")
    validador.innerHTML = password

    if (password == 911) {
        validador.innerHTML = '"Password 1 correcta."'
    }
    else if(password == 714 ) {
        validador.innerHTML = '"Password 2 correcta."'
    }
    else {
        validador.innerHTML = '"Password incorrecta."'
    }
}