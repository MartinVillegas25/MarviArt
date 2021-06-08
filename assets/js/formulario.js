    let nombre = document.querySelector(`#floatingname`);
    let correo = document.querySelector(`#floatingemail`);
    let mensaje= document.querySelector(`#floatingtextarea`);
    let formulario = document.querySelector(`#form`);   

function enviarFormulario(event){
    event.preventDefault()
    if(nombre.value === null || nombre.value === ''){
        alert("Debes completar el nombre");
    }
    if(mensaje.value=== null || mensaje.value=== ''){
        alert("Debes colocar un mensaje");    
    }
    if(correo.value===null || correo.value ===''){
        alert("debes colocar un mail");
    }

    mensajeEnviado()
}

document.querySelector(`#botonformulario`).addEventListener(`click`, enviarFormulario);

async function mensajeEnviado(){
    const form = new FormData(formulario);
    const response = await fetch(formulario.action,{
        method: formulario.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        formulario.reset()
        alert("El formulario ha sido enviado correctamente, te escribire pronto"); 
    }
   
}





