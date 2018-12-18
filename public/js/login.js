/**
 * @function loginFunctions - all functions related to loging in can be found here
 */
loginFunctions = {

    /**
     * @event - on click
     * @function renderLogin - renders login to screen when called
     */
    renderLogin: function () {
        $('body').append(
            $('<div>').attr('id', 'login-screen').addClass('ui login-screen').append(
                $('<form>').addClass('login-form').append(
                    $('<div>').attr('id', 'close-login').addClass('ui').append(
                        $('<i>').addClass('fas fa-times')
                    ),
                    $('<div>').addClass('ui username').append(
                        $('<input>').attr({ 'id': 'username-input', 'placeholder': 'Username' })
                    ),
                    $('<div>').addClass('ui password').append(
                        $('<input>').attr({ 'id': 'password-input', 'type': 'password', 'placeholder': 'Password' })
                    ),
                    $('<h1>').attr('id', 'login-button').addClass('ui button acc').css({ 'height': '48px', 'margin': '8px' }).text('LOGIN'),
                    $('<div>').addClass('create-acc-box').append(
                        $('<h1>').text('Dont have an account?'),
                        $('<h1>').attr('id', 'create-acc-link').text('Create an Account!')
                    ),
                    $('<div>').addClass('create-account-form').append(
                        $('<div>').attr('id', 'close-login').addClass('ui').append(
                            $('<i>').addClass('fas fa-times')
                        ),
                        $('<div>').addClass('ui username').append(
                            $('<input>').attr({ 'id': 'create-username-input', 'placeholder': 'Username' })
                        ),
                        $('<div>').addClass('ui password').append(
                            $('<input>').attr({ 'id': 'create-password-input', 'type': 'password', 'placeholder': 'Password' })
                        ),
                        $('<div>').addClass('create-acc-box').append(
                            $('<h1>').text('Already have an account?'),
                            $('<h1>').attr('id', 'login-link').text('Login to your Account!')
                        ),
                        $('<h1>').attr('id', 'create-account-button').addClass('ui button acc').css({ 'height': '48px', 'margin': '8px' }).text('CREATE ACCOUNT')
                    )
                )
            )
        )
    },

    /**
     * @event - on click
     * @function login - verifies username and password then removes login screen
     */
    login: function () {
        var user = {
            username: $('#username-input').val(),
            password: $('#password-input').val()
        }
        $.ajax({ url: '/api/login', method: 'POST', data: user })
            .then(function (data) {
                if (data === null) {
                    alert('user not found! :o');
                    return;
                } else {
                    iflogged = data.username;
                    if (iflogged != undefined) {
                        $('.login-screen').remove();
                        if ($('#beats-list').length != 0) {
                            userBoardFunctions.renderBeats();
                        }
                    }
                    return iflogged
                }
            })
    },

    /**
     * @event - on click
     * @function createAccount - Creates an account, adding it to the DB
     */
    createAccount: function (newUser) {
        var newUser = {
            username: $('#create-username-input').val(),
            password: $('#create-password-input').val()
        }
        $.ajax({ url: '/api/users', method: 'POST', data: newUser })
            .then(function (data) {
                if (data.status === 301) {
                    iflogged = data.user.username;
                    if (iflogged != undefined) {
                        $('.login-screen').remove();
                    }
                    return iflogged
                }
                if (data.errors[0].message === 'username must be unique') {
                    alert('that username is already taken')
                } 
            })
    },

}

/**
 * @event - all event listeners ('enter' functionality, ease of user experience)
 */
$(document).ready(function () {

    alert('Dont use an actual password! This login feature has no security');

    /**
     * @event - calls login function after basic logic
     */
    $(document).on('click', '#login-button', function () {
        if ($('#username-input').val() === '') {
            alert('Please enter a username');
            return
        }
        if ($('#password-input').val() === '') {
            alert('Please enter a password');
        } else {
            loginFunctions.login()
        }
    });

    /**
     * @event - calls createAccount function after basic logic
     */
    $(document).on('click', '#create-account-button', function () {
        if ($('#create-username-input').val() === '') {
            alert('Please enter a username');
            return
        }
        if ($('#create-password-input').val() === '') {
            alert('Please enter a password');
        } else {
            loginFunctions.createAccount();
        }
    });

    /**
     * @event - enter functionality! for ease of use
     */
    $(document).keypress(function (e) {
        if ($('#create-password-input').is(':focus')) {
            if (e.which == 13) {
                if ($('#create-username-input').val() === '') {
                    alert('Please enter a username');
                    return
                }
                if ($('#create-password-input').val() === '') {
                    alert('Please enter a password');
                } else {
                    loginFunctions.createAccount();
                }
            }
        }
        if ($('#create-username-input').is(':focus')) {
            if (e.which == 13) {
                if ($('#create-username-input').val() === '') {
                    alert('Please enter a username');
                } else {
                    $('#create-password-input').focus();
                }
            }
        }
        if ($('#password-input').is(':focus')) {
            if (e.which == 13) {
                if ($('#username-input').val() === '') {
                    alert('Please enter a username');
                    return
                }
                if ($('#password-input').val() === '') {
                    alert('Please enter a password');
                } else {
                    loginFunctions.login();
                }
            }
        }
        if ($('#username-input').is(':focus')) {
            if (e.which == 13) {
                if ($('#username-input').val() === '') {
                    alert('Please enter a username');
                } else {
                    $('#password-input').focus();
                }
            }
        }
    });

    /**
     * @event - on click functionality
     */
    $(document).on('click', '#login-link', function () {
        $('.create-account-form').addClass('create-out');
        $('.create-account-form').removeClass('create-in');
    });

    $(document).on('click', '#create-acc-link', function () {
        $('.create-account-form').addClass('create-in');
        $('.create-account-form').removeClass('create-out');
    });

    $(document).on('click', '#open-login-button', function () {
        loginFunctions.renderLogin();
    });

    $(document).on('click', '#close-login', function () {
        $('.login-screen').addClass('remove-login');
        setTimeout(function () {
            $('.login-screen').remove()
        }, 400);
    });

})