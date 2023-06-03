var titulo = document.querySelector('.titulo');

titulo.innerHTML= 'Aparcida Nutricionista.';




let adicionarPaci = document.querySelector('#adicionar-paciente');
const tabelaPacientes = document.querySelector('#tabela-pacientes');
const pacientes = document.querySelectorAll('.paciente');


adicionarPaci.addEventListener('click', () => {
    event.preventDefault()
    let form = document.querySelector('#form-adiciona');
    let inputs = form.querySelectorAll('input');
    let valor = verificaValorDosInputs(inputs);
    let pesoValido = verificaPesoValido(form);
    let alturaValida = verificaAlturaValida(form);
    


    if(!valor && !pesoValido && !alturaValida){
        let paciente = obtemPacienteDoForm(form);
        
        let pacienteTr = montaTr(paciente);
        

        let tabela = document.querySelector('#tabela-pacientes');
        tabela.appendChild(pacienteTr);

        form.reset();
    }
});


