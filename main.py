motor.motor_run(motor.Motors.M2, motor.Dir.CW, 150)
motor.motor_run(motor.Motors.M1, motor.Dir.CW, 150)
basic.pause(5000)
motor.motor_stop_all()