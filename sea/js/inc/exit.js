$(window).on('load', onWindowLoaded);

function onWindowLoaded() {
    exitButtonClicked();
}

function exitButtonClicked() {
    $('.exit-button').click(function() {
        event.preventDefault();
        $.ajax({
            url: './inc/exit.inc.php',
            type: 'POST',
            complete: onComplete,
        });
    });
}

function onComplete($response) {
    if ($response.responseText != 0) {
        window.location = 'index.php';
    }
}
