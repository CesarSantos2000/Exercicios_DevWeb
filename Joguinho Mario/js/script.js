const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const score = document.getElementById('pontos')
const gameover = document.getElementById('game-over')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(() => {

        mario.classList.remove('jump')
    }, 500);
}

let pontos = 0
const loop = setInterval(() => {

    const pipeposition = pipe.offsetLeft;
    const marioposition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsposition = clouds.offsetLeft;

    if (pipeposition <= 120 && pipeposition > 0 && marioposition < 80) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipeposition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioposition}px`

        mario.src = './img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsposition}px`

        mario.style.bottom = `${marioposition}`
        mario.style.animation = 'game-over 1s linear'

        gameover.innerHTML = 'GAME-OVER!'
        clearInterval(loop)

    }
    pontos += 1
    score.innerHTML = "score: " + pontos
}, 10)

document.addEventListener('keydown', jump)