let direction = 0
input.onGesture(Gesture.Shake, function () {
    direction = randint(1, 3)
    if (direction == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (direction == 2) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showArrow(ArrowNames.West)
    }
    basic.pause(2000)
    basic.clearScreen()
})
