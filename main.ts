control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_EVT_ANY, function () {
    motor.motorStopAll()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_EVT_ANY, function () {
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 150)
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 150)
})
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
