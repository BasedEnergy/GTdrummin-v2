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
                $('<h1>').addClass('ui fl-title').text('Friends List'),
                $('<h1>').text('still not functional :(').css('color', 'white'),
                $('<div>').addClass('ui list').attr('id', 'friends-list')
            ),
        )
    },

    renderBeatsList: function () {
        $('.user-board').append(
            $('<div>').addClass('ui beats-list').append(
                $('<h1>').addClass('ui bl-title').text('Beats'),
                $('<div>').addClass('list').attr('id', 'beats-list'),
                $('<div>').attr('id', 'open-save-beat').addClass('ui list-button').text('Save Beat')
            ),
        )
    },

    renderBeats: function () {
        let user = {
            user: iflogged
        }
        $.ajax({ url: '/api/beats/user', method: 'POST', data: user })
            .then(function (data) {
                if (data.length != 0) {
                    data.forEach(e => {
                        $('#beats-list').append(
                            $('<div>').addClass('ui beat').attr('id', `${e.beatId}`).append(
                                $('<div>').addClass('share-beat').append(
                                    $('<i>').addClass('fas fa-share')
                                ),
                                $('<h1>').text(e.beatName),
                                $('<div>').addClass('delete-beat').append(
                                    $('<i>').addClass('fas fa-times')
                                )
                            )
                        );
                    })
                }
            })
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

    openSaveBeat: function () {
        $('body').append(
            $('<div>').addClass('save-beat-page').append(
                $('<div>').addClass('save-beat').append(
                    $('<h1>').text('Name your beat! :D'),
                    $('<input>').attr('id', 'save-beat-input'),
                    $('<div>').attr('id', 'save-beat').append(
                        $('<h1>').text('Save Beat!')
                    )
                )
            )
        )
    },

    saveBeat: function () {
        let beatName = $('#save-beat-input').val();
        let newBeat = {
            beat: JSON.stringify(matrix1.matrix),
            user: iflogged,
            BPM: matrix1.bpm,
            beatName: beatName
        };
        console.log(newBeat)
        $.ajax({ url: '/api/beats', method: 'POST', data: newBeat })
            .then(function (data) {
                if (data.status === 301) {
                    $('#beats-list').append(
                        $('<div>').addClass('ui beat').attr('id', `${data.beat.beatId}`).append(
                            $('<div>').addClass('share-beat').append(
                                $('<i>').addClass('fas fa-share')
                            ),
                            $('<h1>').text(data.beat.beatName),
                            $('<div>').addClass('delete-beat').append(
                                $('<i>').addClass('fas fa-times')
                            )
                        )
                    );
                    $('.save-beat-page').remove();
                }
                if (data.errors[0].message === 'Beats.user cannot be null') {
                    alert('You need to be signed in to save beats!');
                }
            })
    },

    shareBeat: function () {

    },

    deleteBeat: function (beatId) {
        $.ajax({ url: '/api/beats/delete', method: 'POST', data: beatId })
            .then(function (data) {
                alert(`Deleted beat: ${data.beatId}`)
            })
    }

}

$(document).ready(function () {

    $('.user-board').append(
        $('<div>').addClass('ui fl-button-return').css('animation', 'none').attr('id', 'open-friends-list-button').append(
            $('<i>').addClass('fas fa-users')
        ),
        $('<div>').addClass('ui bl-button-return').css('animation', 'none').attr('id', 'open-beats-list-button').append(
            $('<i>').addClass('fab fa-itunes-note')
        )
    );

    userBoardFunctions.renderEffects();

    $(document).on('click', '#open-friends-list-button', function () {
        if ($('.friends-list').length != 1) {
            userBoardFunctions.renderFriendsList();
            $('#open-friends-list-button').removeClass('fl-button-return').addClass('fl-button-follow');
            $('.friends-list').removeClass('close-friends-list').addClass('open-friends-list');
        } else {
            $('#open-friends-list-button').removeClass('fl-button-follow').addClass('fl-button-return');
            $('.friends-list').removeClass('open-friends-list').addClass('close-friends-list');
            setTimeout(function () { $('.friends-list').remove() }, 400)
        }
    });

    $(document).on('click', '#open-beats-list-button', function () {
        if ($('.beats-list').length != 1) {
            userBoardFunctions.renderBeatsList();
            userBoardFunctions.renderBeats();
            $('#open-beats-list-button').removeClass('bl-button-return').addClass('bl-button-follow');
            $('.beats-list').removeClass('close-beats-list').addClass('open-beats-list');
        } else {
            $('#open-beats-list-button').removeClass('bl-button-follow').addClass('bl-button-return');
            $('.beats-list').removeClass('open-beats-list').addClass('close-beats-list');
            setTimeout(function () { $('.beats-list').remove() }, 400);
        }
    });

    $(document).on('click', '#open-save-beat', function () {
        userBoardFunctions.openSaveBeat();
    });

    $(document).on('click', '#save-beat', function () {
        userBoardFunctions.saveBeat();
    });

    $(document).on('click', '.delete-beat', function () {
        let beatId = {
            id: $(this).parent().attr('id')
        }
        userBoardFunctions.deleteBeat(beatId);
        $(this).parent().remove();
    });

    $(document).on('click', '.friend', function () {
        // open chat to that friend
    })

})