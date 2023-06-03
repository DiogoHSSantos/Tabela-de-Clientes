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

function verificaValorDosInputs(inputs){
    for(let i = 0 ; i < inputs.length ; i++){
        var valor = inputs[i].value;
    };
    if(valor == ''){
        valor = true;
        alert('valor faltando')
    }else{
        valor = false
    }
    return valor
};

function verificaPesoValido(form){
    let valorDoPeso = form.querySelector('#peso');
    let pesoValido = valorDoPeso.value;
    if(pesoValido > 300 || pesoValido <= 0){
        pesoValido = true;
        alert('peso invalido')
    } else {
        pesoValido = false;
    };
    return pesoValido;
};

function verificaAlturaValida(form){
    let valorDaAltura = form.querySelector('#altura');
    let alturaValida = valorDaAltura.value;
    if(alturaValida > 3.00 || alturaValida <= 0.50){
        pesoValido = true;
        alert('altura invalida')
    } else {
        alturaValida = false;
    };
    return alturaValida;
};

function calculaImc(altura, peso){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
