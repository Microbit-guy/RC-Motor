input.onButtonPressed(Button.A, function () {
    // Send a message to the other Micro:bit
    radio.sendString("move_motor")
    basic.showString("1")
    basic.pause(1000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "move_motor") {
        servos.P0.setAngle(90)
        // Motor runs for 2 seconds
        basic.pause(2000)
        servos.P0.setAngle(0)
        basic.showString("1")
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "move_motor2") {
        servos.P1.setAngle(90)
        // Motor runs for 2 seconds
        basic.pause(2000)
        servos.P1.setAngle(0)
        basic.showString("2")
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedString == "move_motor3") {
        servos.P0.setAngle(180)
        // Motor runs for 2 seconds
        basic.pause(2000)
        servos.P0.setAngle(0)
        basic.showString("11")
        basic.pause(1000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    // Send a message to the other Micro:bit
    radio.sendString("move_motor2")
    basic.showString("2")
    basic.pause(1000)
    basic.clearScreen()
})
radio.setGroup(1)
servos.P0.setAngle(0)
servos.P1.setAngle(0)
