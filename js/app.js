// Tu código aquí

const form = document.querySelector('#message-form')

form.addEventListener('submit', function(e){
    console.log("Información sobre el objeto event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada. 

    // Propiedad que contiene el valor actual del campo input
    // let textToPass = form[0].value

    // Forma habitual de hacerlo: accediendo al elemento INPUT, propiedad 'value'
    textToPass = document.querySelector('#message').value

    if (textToPass) {
    document.querySelector('.message-content').textContent = textToPass
    }

    else {
        let messageEmpty = document.querySelector('h5.feedback')
        messageEmpty.classList.add('show')
        setTimeout( () => {
            messageEmpty.classList.add('show')
        }, 2000);

    }
    console.log("Hemos hecho clic en el botón de submit!")

})