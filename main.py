#initialize variables
led_x = 0
led_y = 1


def on_forever():
    led.plot(led_x, 0)
    if led_x == 0:
        led_x+=1,
basic.forever(on_forever)
