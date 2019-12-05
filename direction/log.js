let ctx, canvas
let prev_key_pressed = {}
let is_key_pressed = {}
let next_key_pressed = {}
let prev_click = new Array(2).fill(-10)
let is_click = new Array(2).fill(-10)
let next_click = new Array(2).fill(-10)

let WIDTH = 600
let HEIGHT = 600

function keyD(event) {
    next_key_pressed[event.keyCode] = true
}

function keyU(event) {
    next_key_pressed[event.keyCode] = false
}

function mouseD(event) {
    next_click = [event.clientX, event.clientY]
}

function Kdown() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH / 2 - 40 && is_click[0] <= WIDTH / 2 + 40) {
            return is_click[1] >= HEIGHT * 2 / 3 - 20 && is_click[1] <= HEIGHT * 2 / 3 + 60
        } else {
            return false
        }
    } else {
        return is_key_pressed[40] && !prev_key_pressed[40]
    }
}

function Kup() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH / 2 - 40 && is_click[0] <= WIDTH / 2 + 40) {
            return is_click[1] >= HEIGHT / 3 - 20 && is_click[1] <= HEIGHT / 3 + 60
        } else {
            return false
        }
    } else {
        return is_key_pressed[38] && !prev_key_pressed[38]
    }
}

function Kleft() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH / 3 - 40 && is_click[0] <= WIDTH / 3 + 40) {
            return is_click[1] >= HEIGHT / 2 - 20 && is_click[1] <= HEIGHT / 2 + 60
        } else {
            return false
        }
    } else {
        return is_key_pressed[37] && !prev_key_pressed[37]
    }
}

function Kpass() {
    return "まほう"
}

function Kright() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH * 2 / 3 - 40 && is_click[0] <= WIDTH * 2 / 3 + 40) {
            return is_click[1] >= HEIGHT / 2 - 20 && is_click[1] <= HEIGHT / 2 + 60
        } else {
            return false
        }
    } else {
        return is_key_pressed[39] && !prev_key_pressed[39]
    }
}

function Kreset() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH / 2 - 40 && is_click[0] <= WIDTH / 2 + 40) {
            return is_click[1] >= HEIGHT / 2 - 20 && is_click[1] <= HEIGHT / 2 + 60
        } else {
            return false
        }
    } else {
        return is_key_pressed[82] && !prev_key_pressed[82]
    }
}

function Ktweet() {
    if (is_click != prev_click) {
        if (is_click[0] >= WIDTH * 3 / 8 && is_click[0] <= WIDTH * 5 / 8) {
            return is_click[1] >= HEIGHT / 2 && is_click[1] <= HEIGHT * 5 / 8
        } else {
            return false
        }
    } else {
        return is_key_pressed[84] && !prev_key_pressed[84]
    }
}

function init() {
    canvas = document.getElementById('canvas')
    if (!canvas || !canvas.getContext) return
    ctx = canvas.getContext('2d')

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    window.addEventListener("keydown", keyD)
    window.addEventListener("keyup", keyU)
    window.addEventListener("mousedown", mouseD)

    setTimeout(function () {
        if (window["main"]) {
            setInterval(main, 1000 / 60)
        }
    }, 10)
}

window.onload = init