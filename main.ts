function send () {
    let string2send = 0
    radio.sendString("" + (string2send))
}
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("B E D C5 - G C - ", 120), music.PlaybackMode.UntilDone)
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    send()
})
