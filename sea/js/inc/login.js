const ERR_NO_ERROR = 0;
$(window).on('load', onWindowLoaded);

function onWindowLoaded() {
    loginButtonClicked();
}

function loginButtonClicked() {
    $('#login-button').click(function() {
        event.preventDefault();
        const login = $('#login').val();
        const password = $('#currentPassword').val();
        const data = {'login': login, 'password': password};
        $.ajax({
            url: 'inc/login.inc.php',
            type: 'POST',
            data: data,
            dataType: 'json',
            complete: onCompleteLogin,
        });
    });
}

function showLoginError() {
    $('#user_name').text('Неверное имя пользователя или пароль');
}

function onCompleteLogin(response) {
    if (response.responseText != ERR_NO_ERROR) {
        showLoginError();
    } else {
        window.location = 'personal_page.php';
    }
}
