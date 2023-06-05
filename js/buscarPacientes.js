let botaoAdicionar = document.querySelector('#buscar-paciente');

botaoAdicionar.addEventListener('click', ()=>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json');

    xhr.addEventListener('load', ()=>{

        if(xhr.status == 200){
            let resposta = xhr.responseText;
            let pacientes = JSON.parse(resposta);

            pacientes.forEach((paciente) => {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            alert(xhr.status);
            alert(xhr.responseText);
        };

        
    });

    xhr.send()
})