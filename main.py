def send():
    pass

def on_gesture_shake():
    send()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

radio.send_value("A messenger nearby has been activated.", 1)