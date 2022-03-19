// initialize variables
//for startup
let led_x0 = 0;
let led_x1 = 0;
let led_x2 = 0;
let led_x3 = 0;
let led_x4 = 0;
let start=true;
let loading=true;
let hp_blips = 100;

function startup() {
    
    led.plot(led_x0, 0)
    led_x0 += 1
    led.plot(led_x1, 1)
    led_x1 += 1
    led.plot(led_x2, 2)
    led_x2 += 1
    led.plot(led_x3, 3)
    led_x3 += 1
    led.plot(led_x4, 4)
    led_x4 += 1

    led.unplot(2,0)
    led.unplot(0, 3)
    led.unplot(0,4)
    led.unplot(1,4)
    led.unplot(3,4)
    led.unplot(4,4)
    led.unplot(4,3)

    pause(400)
    if (start,loading) {
    basic.clearScreen()
    
    }
    
   
    
}

function hp() {
    
    while (loading) {

    }
    basic.showIcon(IconNames.Heart)
    pause(hp_blips)
    basic.clearScreen()
    
}

startup()
pause(1000)
hp()


basic.forever(function on_forever() {





   
        
    
})
