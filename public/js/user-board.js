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

    userBoardFunctions.renderEffects();

    console.log($('.friends-list'))

    $(document).on('click', '#open-friends-list', function () {
        userBoardFunctions.renderFriendsList()
    })

    $(document).on('click', '.friend', function () {
        // open chat to that friend
    })

})