describe('render login', function () {

    it('should render the login form on click', function () {
        $('#open-login-button').trigger('click');
        expect(function () {
            $('.login-screen').length.to.equal(0)
        })
    });

});

describe('close login', function () {

    it('should add the remove-login class to .login-screen', function () {
        $('#close-login').trigger('click');
        expect(function () {
            $('.login-screen').hasClass('.remove-login').to.equal(true)
        })
    });

    it('should remove the login page after .4s', function (done) {
        $('#close-login').trigger('click');
        setTimeout(function () {
            expect($('.login-screen').length).to.equal(0);
            done();
        }, 400)
    })

});

describe('create account', function () {

    beforeEach(function () {
        $('#create-username-input').val('Kevin');
        $('#create-password-input').val('Kevin');
    });

    it('should create user info from input fields', function () {
        $('#create-account-button').trigger('click');
        expect(function () {
            loginFunctions.createAccount().to.equal({ username: 'Kevin', password: 'Kevin' })
        })
    });

});

describe('login', function () {
    
    beforeEach(function () {
        $('#username-input').val('Kevin');
        $('#password-input').val('Kevin');
    });

    it('should create a user object on login', function () {
        expect(function () {
            loginFunctions.login().to.equal({ username: 'Kevin', password: 'Kevin' })
        })
    })

    it('should set iflogged to that users name', function () {
        $('#login-button').trigger('click');
        expect(function () {
            iflogged.to.equal('Kevin')
        })
    })

})