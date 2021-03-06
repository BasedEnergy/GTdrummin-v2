describe('on start', function () {

    it('should render the open friends list', function () {
        expect(function () {
            $('#open-freinds-list-button').length.to.equal(1)
        })
    });

    it('should render the open beats list', function () {
        expect(function () {
            $('#open-beats-list-button').length.to.equal(1)
        })
    });
    
});

describe('Beats List', function () {

    it('should open the beats list form after rendering', function () {
        $('#open-beats-list-button').trigger('click');
        expect(function () {
            $('.beats-list').length.to.equal(1);
        })
    });

    it('should close the beats list form on click', function () {
        $('#open-beats-list-button').trigger('click');
        expect(function () {
            $('.beats-list').css('left').to.equal('-300px');
        })
    });

    it('should remove the beats list after .4s', function (done) {
        $('#open-beats-list-button').trigger('click');
        setTimeout(function () {
            expect($('.beats-list').length).to.equal(0);
            done();
        }, 400)
    });

});

describe('Friends List', function () {

    it('should open the friends list form after rendering', function () {
        $('#open-friends-list-button').trigger('click');
        expect(function () {
            $('.friends-list').length.to.equal(1);
        })
    });

    it('should close the friends list form on click', function () {
        $('#open-friends-list-button').trigger('click');
        expect(function () {
            $('.friends-list').css('left').to.equal('-300px');
        })
    });

    it('should remove the friends list after .4s', function (done) {
        $('#open-friends-list-button').trigger('click');
        setTimeout(function () {
            expect($('.friends-list').length).to.equal(0);
            done();
        }, 400)
    });

});

describe('chat', function () {

    it('should render the correct chat when a friend is clicked', function () {
        
    })

})
