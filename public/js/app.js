setBeat = function (array) {
    $('#test').remove();
    $('body').append(
        $('<div>').attr('id', 'test').append(
            $('<div>').attr('id', 'Content').append(
                $('<canvas>').addClass('matrix').attr('nx', 'matrix').append(
                    $('<div>').attr('id', 'bar')
                )
            )
        ) 
    )

    /**
     * @function toMaster - sends the new player with drum samples to the Master channel to be used in the drum sequencer 
     */
    var keys = new Tone.Players({
        "kick": "./audio/trapkit/Kicks/Kick-30.wav",
        "snare": "./audio/trapkit/Snares/Snare-16.wav",
        "tom": "./audio/trapkit/Toms/Toms-01.wav",
        "clap": "./audio/trapkit/Claps/Claps-02.wav",
        "open_hat": "./audio/trapkit/Open Hats/OpenHats-06.wav",
        "hi_hat": "./audio/trapkit/Hats/Hats-09.wav",
        "crash": "./audio/trapkit/Crashes/Crashes-08.wav",
        "ride": "./audio/trapkit/Rides/Rides-03.wav"
    }, {
            "volume": -10,
            "fadeOut": "64n",
        }).toMaster();
    var noteNames = ["kick", "snare", "tom", "clap", "open_hat", "hi_hat", "crash", "ride"];
    var loop = new Tone.Sequence(function (time, col) {
        var column = matrix1.matrix[col];
        for (var i = 0; i < 8; i++) {
            if (column[i] === 1) {
                var vel = Math.random() * 0.5 + 0.5;
                keys.get(noteNames[i]).start(time, 0, "32n", 0, vel);
            }
        }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");
    Tone.Transport.start();
    /**
     * @function onload - creates a matrix of squares when the page loads  
     */
    nx.onload = function () {
        nx.colorize("#70D1EE");

        matrix1.col = 16;
        matrix1.row = 8;
        matrix1.init();
        console.log(matrix1.matrix)
        matrix1.draw();
    }
    /**
     * @function Slider - creates a tempo slider that sets the value of the bpm
     */
    Interface.Slider({
        name: "TEMPO",
        min: 60,
        max: 160,
        value: Tone.Transport.bpm.value,
        drag: function (val) {
            Tone.Transport.bpm.value = val;
        }
    });
    Interface.Button({
        text: "PLAY",
        activeText: "PAUSE",
        type: "toggle",
        key: 32, //spacebar
        start: function () {
            loop.start();
            if (Tone.context.state !== 'running') {
                Tone.context.resume();
            }
        },
        end: function () {
            loop.stop();
        },
    });

    document.getElementById('test').style.background = 'linear-gradient(to bottom, rgb(55,55,55), rgb(50,50,130))';
    $('.beat-board').height('calc(60% - 16px)');

}

    prepBeat = function (array) {
        let rightarray = JSON.parse(array)
        console.log(rightarray)
    }

$(document).ready(function () {

    setBeat()

    /**
     * @event - sets the height  and background of .beat-board
     */

    $(document).on('click', '.ui.beat', function () {
        let beatId = {
            id: $(this).attr('id')
        }
        $.ajax({ url: '/api/beats/one', method: 'POST', data: beatId })
            .then(function (data) {
                console.log(data)
                console.log(JSON.parse(data.array))
                prepBeat(data.array)
            })
    })

});
