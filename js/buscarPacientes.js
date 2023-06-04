let botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json');

    xhr.addEventListener('load', ()=>{
        console.log(xhr.responseText);
    });

    xhr.send()
})