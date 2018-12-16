describe('on start', function () {

    it('should render the open friends list', function () {
        expect(function () {
            $('#open-freinds-list-button').length.to.equal(1)
        })
    })
    
})

describe('Friends List', function () {

    it('should render friends to friends list when logged in', function () {
        expect($('.friends-list').length).to.equal(1);
    });

    it('should open the friends list form after rendering', function () {
        $('#open-friends-list-button').trigger('click');
        expect(function () {
            $('.friends-list').length.to.equal(1);
        })
    });

    it('should close the friends list form on click', function () {
        $('#open-friends-list-button').trigger('click');
        expect(function () {
            $('.login-screen').css('left').to.equal('-300px');
        })
    });

    it('should remove the friends list after .4s', function (done) {
        $('#open-friends-list-button').trigger('click');
        setTimeout(function () {
            expect($('.friends-list').length).to.equal(0);
            done();
        }, 400)
    });

})
