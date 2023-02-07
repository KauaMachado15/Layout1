/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function mascaraTel(i) {
    const tel = i.value;
    /*verificar se não é número*/
    if (isNaN(tel[tel.length - 1])) {
        i.value = tel.substring(0, tel.length - 1);
        return;
    }

    i.setAttribute("maxlength", "16");

    /*inclui mascara do telefone*/
    if (tel.length == 1) {
        i.value = "(" + i.value;
    }

    if (tel.length == 3) {
        i.value = i.value + ") ";
    }

    if (tel.length == 6) {
        i.value = i.value + " ";
    }

    if (tel.length == 11) {
        i.value = i.value + "-";
    }
}

function mascaraCPF(i) {
    const cpf = i.value;
    /*verificar se não é número*/
    if (isNaN(cpf[cpf.length - 1])) {
        i.value = cpf.substring(0, cpf.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");

    /*inclui mascara do CPF*/
    if (cpf.length == 3) {
        i.value = i.value + ".";
    }

    if (cpf.length == 7) {
        i.value = i.value + ".";
    }

    if (cpf.length == 11) {
        i.value = i.value + "-";
    }

}

function mascaraCNPJ(i) {
    const cnpj = i.value;
    /*verificar se não é número*/
    if (isNaN(cnpj[cnpj.length - 1])) {
        i.value = cnpj.substring(0, cnpj.length - 1);
        return;
    }

    i.setAttribute("maxlength", "18");

    /*inclui mascara do CNPJ*/
    if (cnpj.length == 2) {
        i.value = i.value + ".";
    }

    if (cnpj.length == 6) {
        i.value = i.value + ".";
    }

    if (cnpj.length == 10) {
        i.value = i.value + "/";
    }

    if (cnpj.length == 15) {
        i.value = i.value + "-";
    }

}

function validar() {
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var fone = formUser.fone.value;
    var end = formUser.end.value;
    var cpf = formUser.cpf.value;
    var cnpj = formUser.cnpj.value;
    var senha = formUser.senha.value;
    var confSenha = formUser.confSenha.value;


    if (nome == "" || nome.length <= 3) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || email.length <= 10) {
        alert("Informe o email correto!");
        formUser.email.focus();
        return false;
    }

    if (fone == "" || fone.length <= 15) {
        alert("Informe o seu telefone correto!");
        formUser.fone.focus();
        return false;
    }

    if (end == "" || end.length <= 20) {
        alert("Informe o seu endereço completo!");
        formUser.end.focus();
        return false;
    }

    if (cpf == "" && cnpj == "") {
        alert("Selecione o CPF ou CNPJ");
        return false;
    }

    if (cpf != "" && cnpj == "") {
        if (cpf.length != 14) {
            alert("Informe o CPF correto!");
            formUser.cpf.focus();
            return false;

        }

        if (cnpj != "" && cpf == "") {
            if (cnpj.length != 18) {
                alert("Informe o CPF correto!");
                formUser.cnpj.focus();
                return false;

            }

        }
    }

    if (senha == "" || senha.length < 8) {
        alert("Senha não atende aos Requisitos!");
        formUser.senha.focus();
        return false;
    }

    if (senha != confSenha){ 
        alert("Senhas não Conferem!");
        formUser.senha.focus();
        return false;
    }
}
















