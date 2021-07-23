let email = document.querySelector('#email')

function validaEmail()
{
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML = 'E-mail Invalido.';
        txtEmail.style.color = 'red';
    }
    else
    {
        txtEmail.innerHTML = '';
        // txtEmail.style.display = 'none';
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Limite de 100 caractéres.';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
    } else {
        txtAssunto.innerHTML = '';
        // txtAssunto.style.display = 'none';
    }
}