let adicionarPaci = document.querySelector('#adicionar-paciente');

adicionarPaci.addEventListener('click', () => {
    event.preventDefault()
    let form = document.querySelector('#form-adiciona');
    let inputs = form.querySelectorAll('input')

    for(let i = 0 ; i < inputs.length ; i++){
        var valor = inputs[i].value;
    };


    if(valor == ''){
        mensagemDeErro()
    }else{
        let paciente = obtemPacienteDoForm(form);
        
        let pacienteTr = montaTr(paciente);
        

        let tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);

        form.reset();
    }
});


function obtemPacienteDoForm(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value ,
        imc: calculaImc(form.altura.value, form.peso.value)
    }

    return paciente;
};


function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};

function montaTd(dado, classe){
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
};

function mensagemDeErro(){

    let erro = alert('Valor Faltando.');
    return erro;
    
};