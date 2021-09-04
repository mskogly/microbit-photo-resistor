let photocell = 0
input.onButtonPressed(Button.A, function () {
    music.playTone(880, music.beat(BeatFraction.Whole))
    serial.writeLine("a pressed")
})
function FlapWings () {
    music.playTone(262, music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.B, function () {
    FlapWings()
})
basic.forever(function () {
    photocell = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    photocell,
    1023
    )
    if (photocell > 900) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
