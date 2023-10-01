$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')
    
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
                required: true,
            },
            endereço: {
                required: true,
            },
            cep: {
                required: true,
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo',
            telefone: 'Por favor, insira o seu número de telefone',
            email: 'Por favor, insira o seu E-mail',
            cpf: 'Por favor, insira seu CPF',
            endereço: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira o CEP de sua cidade'

        },
})
})