$(window).on('load', onWindowLoaded);

function onWindowLoaded() {
    registerButtonClicked();
    loginFieldClicked();
    removeErrorState('#username', 'error');
    removeErrorState('#password', 'error');
    removeErrorState('#confirmPassword', 'error');
}

function clearErrorInfoField($fieldName) {
    $($fieldName).text('');
}

function loginFieldClicked() {
    $('#username').click(function() {
        clearErrorInfoField('#error-registr');
    });
}

function registerButtonClicked() {
    $('#registr-button').click(function() {
        const login = $('#username').val();
        const password = $('#password').val();
        const confirmedPassword = $('#confirmPassword').val();
        if ((login != '') && (password != '') && (confirmedPassword != '')) {
            event.preventDefault();
            if (password != confirmedPassword) {
                $('#password').addClass('error');
                $('#confirmPassword').addClass('error');
            } else {
                const data = {'login': login, 'password': password};
                $.ajax({
                    url: 'inc/registration.inc.php',
                    type: 'POST',
                    data: data,
                    dataType: 'json',
                    complete: onComplete,
                });
            }
        } else {
            $('#login').addClass('error');
            $('#password').addClass('error');
            $('#confirmPassword').addClass('error');
        }
    });
}

function removeErrorState(selector, curClass) {
    $(selector).on('keyup keypress blur change', function() {
        $(selector).removeClass(curClass);
    });
}

function parseResponse(response) {
    response = response.replace(/"/g, '');
    const params = response.split(':');
    const status = params[0].replace('{', '');
    if (status.indexOf('success') != -1) {
        const name = params[1].slice(0, -1);
        return {status: 1, name: name};
    } else {
        return {status: 0};
    }
}

function onComplete(response) {
    const responseObj = parseResponse(response.responseText);

    if (responseObj.status === 1) {
        window.location = 'index.php';
        $('#login').val(responseObj.name);
    } else {
        $('#username').addClass('error');
        $('#error-registr').text('Пользователь уже зарегистрирован');
    }
}

