
    let nome = document.querySelector('#nome');
    let labelNome = document.querySelector('#labelNome');
    let validNome = false;
    
    let nomeMae = document.querySelector('#motherName');
    let labelMother = document.querySelector('#labelMother');
    let validMae = false;
    
    let email = document.querySelector('#email');
    let labelEmail = document.querySelector('#labelEmail');
    let validEmail = false;
    
    let CPF = document.querySelector('#CadastroPessoaFisica');
    let labelCadastroPessoa = document.querySelector('#labelCadastroPessoa');
    let validCpf = false;
    
    let login = document.querySelector('#login')
    let labelLogin = document.querySelector('#labelLogin');
    let validLogin = false;
    
    let telFixo = document.querySelector('#telFixo');
    let labelFixo = document.querySelector('#labelFixo');
    let validFixo = false;
    
    let senha = document.querySelector('#senha');
    let labelSenha = document.querySelector('#labelSenha');
    let validSenha = false;
    
    let celular = document.querySelector('#cel');
    let labelCelular = document.querySelector('#labelCelular');
    let validCelular = false;
    
    let confirmaSenha = document.querySelector('#confirmaSenha');
    let labelConfirma = document.querySelector('#labelConfirma');
    let validConfirma = false;
    
    let endereco = document.querySelector('#endereco');
    let labelEndereco = document.querySelector('#labelEndereco');
    let validEndereco = false;
    
    let bornDate = document.querySelector('#bornDate');
    let labelDate = document.querySelector('#labelDate');
    let validDate = false;
    
    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');
    
    let genderInputs = document.querySelectorAll('input[name="gender"]');
    let selectedGender = null;
    
    var usuarioLogado = false;
    // let botaoLogin = document.getElementById('botaoLogin');
    
    
    login.addEventListener('keyup', () => {
        if (login.value.length == 6) {
            labelLogin.style.color = 'green';
            labelLogin.innerHTML = 'Nome de Usuário'
            validLogin = true;
        } else {
            labelLogin.style.color = ' red';
            labelLogin.innerHTML = 'O nome de usuário deve ter 6 caracteres'
            validLogin = false;
        }
    });

    senha.addEventListener('keyup', () => {
        if (senha.value.length == 8) {
            labelSenha.style.color = 'green';
            labelSenha.innerHTML = 'Senha';
            validSenha = true;
        } else {
            if (senha.value.length > 8) {
                labelSenha.style.color = ' red';
                labelSenha.innerHTML = 'Senha* Máximo 8 caracteres';
                validSenha = false
            } else {
                labelSenha.style.color = ' red';
                labelSenha.innerHTML = 'Senha* Mínimo 8 caracteres';
                validSenha = false;
            }
        }
    });
    confirmaSenha.addEventListener('keyup', () => {
        if (confirmaSenha.value != senha.value) {
            labelConfirma.style.color = ' red';
            labelConfirma.innerHTML = 'Confirmar Senha* senhas diferentes';
            validConfirma = false;
        } else {
            labelConfirma.style.color = 'green'
            labelConfirma.innerHTML = 'Confirmar Senha';
            validConfirma = true;
        }
    });
    
    nome.addEventListener('keyup', () => {
        if (nome.value.length < 15 || nome.value.length > 60) {
            labelNome.style.color = 'red';
            labelNome.innerHTML = 'Nome * mínimo 15 caracteres';
            validNome = false;
        } else {
            labelNome.style.color = 'green';
            labelNome.innerHTML = 'Nome';
            validNome = true;
        }
    });
    motherName.addEventListener('keyup', () => {
        if (motherName.value.length < 15 || motherName.value.length > 60) {
            labelMother.setAttribute('style', 'color: red');
            labelMother.innerHTML = 'Nome Materno * mínimo 15 caracteres';
            validMae = false;
        } else {
            labelMother.setAttribute('style', 'color:green');
            labelMother.innerHTML = 'Nome Materno';
            validMae = true;
        }
    });
    
    email.addEventListener('keyup', () => {
        if (!validarEmail(email.value)) {
            labelEmail.style.color = 'red';
            validEmail = false;
        } else {
            labelEmail.style.color = 'green';
            validEmail = true;
        }
    });
    
    CadastroPessoaFisica.addEventListener('keyup', () => {
        const cpfValue = CadastroPessoaFisica.value.replace(/\D/g, ''); // Remover caracteres não numéricos
        if (validarCPF(cpfValue)) {
            labelCadastroPessoa.style.color = 'green';
            validCpf = true;
        } else {
            labelCadastroPessoa.style.color = 'red';
            validCpf = false;
        }
    });
    endereco.addEventListener('keyup', () => {
        const enderecoValue = endereco.value.trim();
        if (validarEndereco(enderecoValue)) {
            labelEndereco.style.color = 'green';
            validEndereco = true;
        } else {
            labelEndereco.style.color = 'red';
            validEndereco = false;
        }
    });
    telFixo.addEventListener('keyup', () => {
        const telFixoValue = telFixo.value.trim();
    
        if (validarTelefone(telFixoValue)) {
            labelFixo.style.color = 'green';
            validFixo = true;
        } else {
            labelFixo.style.color = 'red';
            validFixo = false;
        }
    });
    
    cel.addEventListener('keyup', () => {
        const celValue = cel.value.trim();
    
        if (validarTelefone(celValue)) {
            labelCelular.style.color = 'green';
            validCelular = true;
        } else {
            labelCelular.style.color = 'red';
            validCelular = false;
        }
    });
    
    
    
    bornDate.addEventListener('change', () => {
        const bornDateValue = bornDate.value.trim();
    
        if (validarDataNascimento(bornDateValue)) {
            labelDate.style.color = 'green';
            validDate = true;
        } else {
            labelDate.style.color = 'red';
            validDate = false;
        }
    });
    genderInputs.forEach((genderInput) => {
        genderInput.addEventListener('click', () => {
            selectedGender = genderInput.value;
        });
    });
    
    
    function validarDataNascimento(dataNascimento) {
        const dataRegex = /^\d{4}-\d{2}-\d{2}$/;
    
        if (!dataRegex.test(dataNascimento)) {
            return false;
        }
    
        const partesData = dataNascimento.split('-');
        const ano = parseInt(partesData[0], 10);
        const mes = parseInt(partesData[1], 10);
        const dia = parseInt(partesData[2], 10);
    
        const dataAtual = new Date();
        const ultimoDiaDoMes = new Date(ano, mes, 0).getDate(); // Obtem o último dia do mês
    
        return (
            dataRegex.test(dataNascimento) &&
            dia >= 1 &&
            dia <= ultimoDiaDoMes &&
            mes >= 1 &&
            mes <= 12 &&
            ano >= 1000 &&
            ano <= 9999
        );
    }
    
    
    
    function validarTelefone(telefone) {
        const telefoneRegex = /^\(\+55\)\d{2}\d{8,9}$/;
        return telefoneRegex.test(telefone);
    }
    
    
    function validarEndereco(endereco) {
        const enderecoRegex = /^[a-zA-Z0-9\s,'.\-\p{L}]*$/u;
        return enderecoRegex.test(endereco);
    }
    
    
    function validarCPF(cpf) {
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // CPF com pontos e traço
        const cpfRegexSemPontos = /^\d{11}$/; // CPF sem pontos
        return cpfRegex.test(cpf) || cpfRegexSemPontos.test(cpf);
    }
    
    function validarEmail(email) {
        var padrao = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
        return padrao.test(email);
    }
    
    //----------------------------------------------Função do botão de cadastrar-----------------------------------------------------------------------------------------
    
    function cadastrar() {
        if (validNome && validEmail && validCpf && validLogin && validSenha && validConfirma && validMae && validEndereco && validFixo && validCelular && validDate) {
    
            let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');
    
            listaUsuario.push(
                {
                    nomeCad: nome.value,
                    emailCad: email.value,
                    cpfCad: CPF.value,
                    loginCad: login.value,
                    telFixoCad: telFixo.value,
                    senhaCad: senha.value,
                    celularCad: celular.value,
                    enderecoCad: endereco.value,
                    bornDateCad: bornDate.value,
                    genderCad: selectedGender,
                }
            );
    
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))
    
            msgSuccess.setAttribute('style', 'display:block');
            msgSuccess.innerHTML = '<strong>Cadastrando usuario...</strong>';
            msgError.innerHTML = '';
            msgError.setAttribute('style', 'display:none');
    
            setTimeout(() => {
                window.location.href = 'login.html'
            }, 3000);
    
        } else {
            msgError.innerHTML = '<strong>Por favor, preencha os campos corretamente</strong>';
            msgError.setAttribute('style', 'display:block');
            msgSuccess.setAttribute('style', 'display:none');
            msgSuccess.innerHTML = '';
        }
    }
    
    
    
    //---------------------------------------------------------------------------------------------------
    
    //--------------------Função da pagina de login-------------------------------
    
    function entrar() {
        let usuario = document.querySelector('#usuario');
        let userLabel = document.querySelector('#userLabel');
    
        let password = document.querySelector('#senha');
        let labelPassword = document.querySelector('#senhaLabel');
    
        let msgError = document.querySelector('#msgError');
        let listaUser = [];
    
        let userValid = {
            login: '',
            senha: '',
        }
    
        listaUser = JSON.parse(localStorage.getItem('listaUsuario'));
    
        if (!usuario.value || !password.value) {
            msgError.setAttribute('style', 'display:block');
            msgError.innerHTML = 'Por favor, preencha ambos os campos.';
            return;
        }
    
        listaUser.forEach((item) => {
            if (usuario.value == item.loginCad && password.value == item.senhaCad) {
                userValid = {
                    login: item.loginCad,
                    senha: item.senhaCad
                };
            };
        });
    
        if (usuario.value == userValid.login && password.value == userValid.senha) {
            window.location.href = 'main.html';
            let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
            localStorage.setItem('token', token)
    
        } else {
            userLabel.style.color = 'red';
            usuario.style.color = 'red';
            labelPassword.style.color = 'red';
            password.style.color = 'red';
            msgError.setAttribute('style', 'display:block');
            msgError.innerHTML = 'Usuario ou senha incorretos';
            usuario.focus();
        };
    };
    // -------------------------------------------------------------------------------------------------------------
function sair(){
    localStorage.removeItem('token')
    window.location.href = 'login.html'
}

function sairServicos(){
    localStorage.removeItem('token')
    window.location.href = '../login.html'
}