
let request;

let testArray = new Array();
testArray[0] = new Array(false, true, false, true, false, true, false);

describe('renderLogin', function () {

});

describe('open login', function () {

    it('should open the login form on click', function () {
        $('#open-login-button').trigger('click');
        expect($('.login-screen') != undefined);
    });

});

describe('close login', function () {

    it('should add the remove-login class to login', function () {
        $('#close-login').trigger('click');
        expect($('.login-screen').hasClass('.remove-login'));
    });

    it('should remove the login page after .4s', function () {
        $('#close-login').trigger('click');
        expect(setTimeout(function () {
            $('.login-screen').val() === undefined;
        }, 400))
    })

});

describe('create account', function () {

    beforeEach(function () {
        $('#create-username-input').val('Kevin');
        $('#create-password-input').val('Kevin');
    });

    it('should create user info from input fields', function () {
        $('#create-account-button').trigger('click');
        expect(user = { username: 'Kevin', password: 'Kevin' })
    });

});

describe('login', function () {
    
    beforeEach(function () {
        $('#username-input').val('Kevin');
        $('#password-input').val('Kevin');
    });

    it('should set iflogged to the username if login succesful', function () {
        $('#login-button').trigger('click');
        expect(user = { username: 'Kevin', password: 'Kevin' })
    })

})