describe('slider returns proper value', function () {
    it('should display the BPM', function () {
        expect(Tone.Transport.bpm.value).to.equal(Interface.Slider.Value);
    })
});

describe('slider change value on drag', function () {
    it('should adjust tempo value when slider is triggered', function () {
        expect(slider.on('change', function (val) { return val; })).to.equal(Tone.Transport.bpm.value);
    })
});


describe('playButton', function () {
    playVar = 0;
    it('should set the play frontend global variable to 1', function () {
        expect(playButton()).to.equal(playVar === 1);
    });
    it('should set the play frontend global variable back to 0 if it is 1.', function () {
        expect(playButton()).to.equal(playVar === 0);
    });
    it('should set the play frontend global variable to 1 again', function () {
        expect(playButton()).to.equal(playVar === 1);
    });
    it('should be repeatable, and always change the variable.', function () {
        expect(playButton()).to.equal(playVar === 0);
    });
});