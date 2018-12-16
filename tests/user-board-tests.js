describe('on start', function () {

    it('should render open-friends-list button', function () {
        expect($('#open-friends-list').length).to.equal(1)
    })

})

describe('Friends List', function () {

    it('should render the friends list when logged in', function () {
        $('#open-friends-list').trigger('click');
        expect($('.friends-list').length).to.equal(1);
    });

    it('should open the friends list form after rendering', function () {
        $('#open-login-button').trigger('click');
        expect($('.login-screen').length).to.equal();
    });

    it('should close the friends list form on click', function () {
        $('#open-login-button').trigger('click');
        expect($('.login-screen').length).to.equal();
    });

    it('should remove the friends list after closing', function () {
        $('#open-login-button').trigger('click');
        expect($('.login-screen').length).to.equal();
    });

})
