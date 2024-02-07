import { cornify_add } from "./cornify.js"

const pressed = []
const secretCode = 'wesbos'

function windowRun (){
    window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressed.push(e.key)
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

    if (pressed.join('').includes(secretCode)){
        console.log('DING DING')
        cornify_add();
    }


console.log(pressed)
})
}

export { windowRun }
