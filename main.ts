input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    definir_contador = 10
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(tempo)
        basic.pause(100)
    }
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    music.play(music.stringPlayable("C C E D F E A D ", 120), music.PlaybackMode.UntilDone)
})
let tempo = 0
let definir_contador = 0
basic.showNumber(0)
let contador = 10
