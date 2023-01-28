const form = document.getElementById('form-validacao');
const containerMensagemSucesso = document.querySelector('.sucess-messege');
const containerMensagemErro = document.querySelector('.error-messege');

function validaNumero(numeroA, numeroB) {
    return numeroB > numeroA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const mensagemSucesso = 'Tudo certo!';
    const mensagemErro = 'Valor colocado em A precisa ser menor que o valor colocado em B!';

    formEvalido = validaNumero(numeroA.value,numeroB.value)
    if (formEvalido) {
        
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
        
    } else {
        numeroA.style.border = '1px solid red';
        numeroB.style.border = '1px solid red';
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';

        numeroA.value = '';
        numeroB.value = '';
    }


})


