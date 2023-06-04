let inputFiltra = document.querySelector('#filtrarTabela');

inputFiltra.addEventListener('input', () => {
    console.log(inputFiltra.value)
    let pacientes = document.querySelectorAll('.paciente');

    if(inputFiltra.value.length > 0){
        for(let i = 0 ; i < pacientes.length ; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector('.info-nome');
            let nome = tdNome.textContent;
            let expressao = new RegExp(inputFiltra.value , 'i')

            if(expressao.test(nome)){
                paciente.classList.remove('esconderItemLista');
                
            }else{
                paciente.classList.add('esconderItemLista');
            }
        };
    } else {
        for(let i = 0 ; i < pacientes.length ; i++){
            let paciente = pacientes[i];
            paciente.classList.remove('esconderItemLista');
        }
    }

    
});