let cond = 0
let score = 0
/**
 * })
 */
/**
 * input.onGesture(Gesture.Shake, function () {
 */
/**
 * basic.showNumber(randint(1, 6))
 */
/**
 * basic.pause(1000)
 */
input.onButtonPressed(Button.AB, function () {
	
})
function _do (cond: number) {
    if (cond == 0) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
    if (cond == 1) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    }
    if (cond == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (cond == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    }
}
basic.forever(function () {
    cond = randint(0, 3)
    _do(cond)
    if (true) {
        if (cond == 0) {
            score += 1
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
    } else if (false) {
        if (cond == 1) {
            score += 1
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
    } else if (false) {
        if (cond == 2) {
            score += 1
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
    } else if (false) {
        if (cond == 3) {
            score += 1
            music.playTone(440, music.beat(BeatFraction.Whole))
        }
    } else if (false) {
        basic.showNumber(score)
    }
})
