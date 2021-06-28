let cond = 0
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
input.onButtonPressed(Button.A, function () {
    if (cond == 0) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (cond == 2) {
        basic.showLeds(`
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (cond == 1) {
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
    }
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
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            # # . # #
            `)
    }
}
basic.forever(function () {
    cond = randint(0, 2)
    _do(cond)
})
