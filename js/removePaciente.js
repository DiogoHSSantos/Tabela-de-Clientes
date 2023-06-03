
// function removePaciente(pacientes, tabelaDePacientes){
//     let novoPaciente = tabelaDePacientes.querySelectorAll('.paciente')
//     for(let i = 0 ; i < novoPaciente.length ; i++){
//         novoPaciente[i].addEventListener('dblclick', ()=>{
            
//             novoPaciente[i].style.transition = '.2s';
//             novoPaciente[i].style.background = '#f4796b'
            

//             setTimeout(() => {
//                 novoPaciente[i].style.transition = '.3s';
//                 novoPaciente[i].style.transform = 'translateX(-200px)';
//                 novoPaciente[i].style.opacity = '0';
//             }, 300);
//             setTimeout(() => {
//                 tabelaPacientes.removeChild(novoPaciente[i]);
//             }, 500);
//         })
        
//     }
// }
// removePaciente(pacientes, tabelaPacientes);


const todaTabela = document.querySelector('table')
todaTabela.addEventListener('dblclick', (event) => {
    let alvoEvento = event.target;
    let paiDoAlvo = alvoEvento.parentNode;


    paiDoAlvo.style.transition = '.5s';
    paiDoAlvo.style.background = '#f4796b'
    paiDoAlvo.style.transform = 'translateX(-200px)';
    paiDoAlvo.style.opacity = '0';
    setTimeout(() => {
        paiDoAlvo.remove()
    }, 500);
    

})