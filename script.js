const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const spriteWidth = 575
const spriteHeight = 523
let frameX = 0
let frameY = 0
let gameFrame = 0 
let staggerFrame = 5 

const playerimage = new Image()
playerimage.src = 'shadowdog.png'

function animate () {
    ctx.clearRect(0,0,CANVAS_WIDTH , CANVAS_HEIGHT)

    let position = Math.floor(gameFrame / staggerFrame) % 6
    frameX = spriteWidth * position    
    ctx.drawImage(playerimage, frameX , frameY * spriteHeight, spriteWidth , spriteHeight, 0 , 0  , spriteWidth , spriteHeight)


    gameFrame++
    requestAnimationFrame(animate)
}
animate()