$(document).ready(function() {
    $('#cpf').mask('000.000.000-00');
    $('#telefone').mask('(00) 00000-0000');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            msg: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            },
            
        },
        messages: {
            nome: 'Insira seu nome',
            email: 'Insira seu e-mail',
            cpf: 'Insira se CPF',
            cep: 'Insira seu CEP',
            endereco: 'Insira seu endereço',
            telefone: 'Insira seu telefone',
            msg: 'Insira uma mensagem',
            
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })
})