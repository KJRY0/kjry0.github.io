let scene = 0
let button = 0
let kana = new Array(5)
for (let i = 0; i < kana.length; i++) {
    kana[i] = new Array(11)
}

kana = [["ん", "ひ", "ゆ", "あ", "け", "の", "な", "た", "る", "へ", "い"], [0, "も", "め", 0, "ふ", "お", "ら", "れ", "を", "と", "ろ"], [0, 0, "み", "さ", "こ", "く", "む", "そ", "わ", "ち", "は"], [0, "せ", "し", 0, "え", "や", "う", "つ", "か", "り", "に"], [0, "す", 0, "き", "て", "ま", 0, "ね", "よ", "ぬ", "ほ"]]

moji = new Array(3)
moji[0] = new Array(2)
moji[0] = [0, 3]
moji[1] = new Array(2)
moji[1] = [0, 10]
moji[2] = new Array(2)
moji[2] = [3, 6]

let flag = 0
let count = 0
let pass = 0

function main() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT)

    Object.assign(prev_key_pressed, is_key_pressed)
    Object.assign(is_key_pressed, next_key_pressed)
    prev_click = is_click
    is_click = next_click
    if (scene == 0) {
        game()
    } else if (scene == 1) {
        clear()
    }
}

function game() {
    draw()
    buttonF()
    checkC()
}

function draw() {
    ctx.fillStyle = "white"
    ctx.fillRect(WIDTH / 2 - 40, HEIGHT / 3 - 20, 80, 80)
    ctx.fillRect(WIDTH / 3 - 40, HEIGHT / 2 - 20, 80, 80)
    ctx.fillRect(WIDTH / 2 - 40, HEIGHT * 2 / 3 - 20, 80, 80)
    ctx.fillRect(WIDTH * 2 / 3 - 40, HEIGHT / 2 - 20, 80, 80)
    ctx.fillRect(WIDTH / 2 - 150, HEIGHT / 6 - 30, 300, 60)
    ctx.fillRect(WIDTH / 2 - 40, HEIGHT / 2 - 20, 80, 80)
    ctx.fillStyle = "black"
    ctx.font = "60px 'ＭＳ Ｐゴシック'"
    ctx.fillText("↑", WIDTH / 2, HEIGHT / 3 + 20)
    ctx.fillText("←", WIDTH / 3, HEIGHT / 2 + 20)
    ctx.fillText("↓", WIDTH / 2, HEIGHT * 2 / 3 + 20)
    ctx.fillText("→", WIDTH * 2 / 3, HEIGHT / 2 + 20)
    ctx.fillText("×", WIDTH / 2, HEIGHT / 2 + 20)
    if (count % 7 == 0) {
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                if (moji[i][0] == 2 && moji[i][1] == 5) {
                    ctx.fillStyle = "red"
                } else {
                    ctx.fillStyle = "black"
                }
            } else if (i == 1) {
                if (moji[i][0] == 3 && moji[i][1] == 9) {
                    ctx.fillStyle = "red"
                } else {
                    ctx.fillStyle = "black"
                }
            } else if (i == 2) {
                if (moji[i][0] == 0 && moji[i][1] == 3) {
                    ctx.fillStyle = "red"
                } else {
                    ctx.fillStyle = "black"
                }
            }
            ctx.fillText(kana[moji[i][0]][moji[i][1]], WIDTH / 2 + 60 * (i - 1), HEIGHT / 6)
        }
    }
    if (pass == 100) {
        ctx.fillStyle = "black"
        ctx.fillRect(WIDTH / 2 - 150, HEIGHT / 6 - 30, 300, 60)
        ctx.fillStyle = "white"
        ctx.fillText(Kpass(), WIDTH / 2, HEIGHT / 6)
    }
    for (let i = 0; i < 7; i++) {
        if (count % 7 > i) {
            ctx.fillStyle = "white"
        } else {
            ctx.fillStyle = "gray"
        }
        ctx.beginPath()
        ctx.arc(WIDTH * (i + 1) / 8, HEIGHT * 7 / 8, 20, 0, Math.PI * 2, 0)
        ctx.fill()
    }
}

function buttonF() {
    if (Kup()) {
        pass = 0
        for (let i = 0; i < 3; i++) {
            moji[i][0] -= 1
            flag = 0
            while (flag == 0) {
                flag = 1
                if (moji[i][0] < 0) {
                    moji[i][0] = 4
                    flag = 0
                }
                if (kana[moji[i][0]][moji[i][1]] == 0) {
                    moji[i][0] -= 1
                    flag = 0
                }
            }
        }
        count += 1
    }
    if (Kdown()) {
        pass = 0
        for (let i = 0; i < 3; i++) {
            moji[i][0] += 1
            flag = 0
            while (flag == 0) {
                flag = 1
                if (moji[i][0] > 4) {
                    moji[i][0] = 0
                    flag = 0
                }
                if (kana[moji[i][0]][moji[i][1]] == 0) {
                    moji[i][0] += 1
                    flag = 0
                }
            }
        }
        count += 1
    }
    if (Kleft()) {
        pass = 0
        for (let i = 0; i < 3; i++) {
            moji[i][1] -= 1
            flag = 0
            while (flag == 0) {
                flag = 1
                if (moji[i][1] < 0) {
                    moji[i][1] = 10
                    flag = 0
                }
                if (kana[moji[i][0]][moji[i][1]] == 0) {
                    moji[i][1] -= 1
                    flag = 0
                }
            }
        }
        count += 1
    }
    if (Kright()) {
        pass = 0
        for (let i = 0; i < 3; i++) {
            moji[i][1] += 1
            flag = 0
            while (flag == 0) {
                flag = 1
                if (moji[i][1] > 10) {
                    moji[i][1] = 0
                    flag = 0
                }
                if (kana[moji[i][0]][moji[i][1]] == 0) {
                    moji[i][1] += 1
                    flag = 0
                }
            }
        }
        count += 1
    }
    if (Kreset()) {
        count = 0
        pass += 1
        moji[0] = [0, 3]
        moji[1] = [0, 10]
        moji[2] = [3, 6]
    }
}

function checkC() {
    if (count % 7 == 0) {
        if (moji[0][0] == 2 && moji[0][1] == 5 && moji[1][0] == 3 && moji[1][1] == 9 && moji[2][0] == 0 && moji[2][1] == 3) {
            scene = 1
        }
    }
}

function clear() {
    draw()
    clearSc()
}

function clearSc() {
    ctx.globalAlpha = 0.7
    ctx.fillStyle = "white"
    ctx.fillRect(0, HEIGHT / 3, WIDTH, HEIGHT / 3)
    ctx.globalAlpha = 1
    ctx.fillStyle = "lightblue"
    ctx.fillRect(WIDTH * 3 / 8, HEIGHT / 2, WIDTH / 4, HEIGHT / 8)
    ctx.fillStyle = "black"
    ctx.font = "60px 'Monotype Corsiva'"
    ctx.fillText("Congratulations!", WIDTH / 2, HEIGHT * 2 / 5)
    ctx.font = "48px 'ＭＳ　Ｐゴシック'"
    ctx.fillText("Tweet", WIDTH / 2, HEIGHT * 9 / 16)
    if (Ktweet()) {
        openTwitter("DIRECTIONをクリアしました！", "http://kjry0.github.io/direction/index.html", "nueDirection", "KJRY0")
    }
}

function openTwitter(text, url, hash, account) {
    var turl = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url + "&hashtags=" + hash + "&via=" + account;
    window.open(turl, '_blank');
}
