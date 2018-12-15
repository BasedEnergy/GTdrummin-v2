describe('Friends List', function () {

    it('should render the friends list when logged in', function () {
        $('#open-friends-list').trigger('click');
        expect($('.friends-list').length != 0)
    });

    it('should open the friends list form on click', function () {
        $('#open-login-button').trigger('click');
        expect($('.login-screen').length != 0);
    });

})

describe('on start renders sounds FX', function () {

    it('should render knob 1', function () {
        expect($('#knob').length != 0)
    })

})
