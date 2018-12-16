/**
 * @function userBoardFunctions - All functions related to the user board can be found here
 */
userBoardFunctions = {

    /**
     * @event - on start
     * @function renderFriends - renders friends box to user board
     */
    renderFriendsList: function () {
        $('.user-board').append(
            $('<div>').addClass('ui friends-list').append(
                $('<h1>').addClass('ui fl-title').text('Friends List')
            )
        )
    },

    /**
     * @event - on start
     * @function renderEffects - renders all effect knobs to user board
     */
    renderEffects: function () {

    },

    /**
     * @event - on click
     * @function renderChat - renders chat to user board when called
     */
    renderChat: function () {

    },

}

$(document).ready(function () {

    $('.user-board').append(
        $('<div>').addClass('ui button-return').css('animation', 'none').attr('id', 'open-friends-list-button').append(
            $('<i>').addClass('fas fa-users')
        )
    )

    userBoardFunctions.renderEffects();

    $(document).on('click', '#open-friends-list-button', function () {
        if ($('.friends-list').length != 1) {
            userBoardFunctions.renderFriendsList()
            $('#open-friends-list-button').removeClass('button-return').addClass('button-follow')
            $('.friends-list').removeClass('close-friends-list').addClass('open-friends-list')
        } else {
            $('#open-friends-list-button').removeClass('button-follow').addClass('button-return');
            $('.friends-list').removeClass('open-friends-list').addClass('close-friends-list');
            setTimeout(function () {$('.friends-list').remove()}, 400)
        }
    })

    $(document).on('click', '.friend', function () {
        // open chat to that friend
    })

})