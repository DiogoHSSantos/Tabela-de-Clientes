var titulo = document.querySelector('.titulo');

titulo.innerHTML= 'Aparcida Nutricionista.';




let adicionarPaci = document.querySelector('#adicionar-paciente');
const tabelaPacientes = document.querySelector('#tabela-pacientes');
const pacientes = document.querySelectorAll('.paciente');

for(let i = 0 ; i < pacientes.length ; i++){
    var alturaAr = pacientes[i].querySelector('.info-altura');
    var pesoAr = pacientes[i].querySelector('.info-peso');
    var imc = pacientes[i].querySelector('.info-imc');

    var altura = alturaAr.textContent;
    var peso = pesoAr.textContent;
    // var imc = imcAr.value;

    imc.innerHTML = calculaImc(altura, peso);

};



adicionarPaci.addEventListener('click', () => {
    event.preventDefault()
    let form = document.querySelector('#form-adiciona');
    let inputs = form.querySelectorAll('input');
    let valor = verificaValorDosInputs(inputs);
    let pesoValido = verificaPesoValido(form);
    let alturaValida = verificaAlturaValida(form);


    if(!valor && !pesoValido && !alturaValida){
        let paciente = obtemPacienteDoForm(form);
        adicionaPacienteNaTabela(paciente);

        form.reset();
    }
});


function calculaImc(altura, peso){
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
};