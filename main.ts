let temperatura = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("luz ON")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("luz OFF")
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
	
})
basic.forever(function () {
    temperatura = input.temperature()
})
