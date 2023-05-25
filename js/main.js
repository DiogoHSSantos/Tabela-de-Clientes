var titulo = document.querySelector('.titulo');

titulo.innerHTML= 'Aparcida Nutricionista.';


const pacientes = document.querySelectorAll('.paciente');
const tabelaPacientes = document.querySelector('#tabela-pacientes')


for (let i = 0 ; i < pacientes.length ; i++){
    let tdnome = pacientes[i].querySelector('.info-nome');
    let nome = tdnome.textContent;

    let tdpeso = pacientes[i].querySelector('.info-peso');
    let peso = tdpeso.textContent;

    let tdaltura = pacientes[i].querySelector('.info-altura');
    let altura = tdaltura.textContent;

    let tdgordura = pacientes[i].querySelector('.info-gordura');
    let gordura = tdgordura.textContent;
    
    let result = pacientes[i].querySelector('.info-imc');

    let imc = peso / (altura * altura);

    if(peso > 400){
        result.innerHTML = 'peso invalido!';
        pacientes[i].classList.add('campo-invalido');
    } else if(altura > 3.00){
        result.innerHTML = 'altura invalida!';
        pacientes[i].classList.add('campo-invalido');
    }else{

        result.innerHTML = (imc.toFixed(2));
    }
}


let adicionarPaci = document.querySelector('#adicionar-paciente');

adicionarPaci.addEventListener('click', () => {
    event.preventDefault()

    let form = document.querySelector('#form-adiciona');

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura =  form.gordura.value;

    let pacienteTr = document.createElement("tr");

    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let gorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
})