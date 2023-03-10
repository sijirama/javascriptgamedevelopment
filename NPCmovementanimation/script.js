/**@type {HTMLCanvasElement}*/ 
const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 500
const CANVAS_HEIGHT = canvas.height = 1000
const numberofenemies = 50
const enemiesArray = []
let gameFrame = 0

class Enemy{
    constructor(){
        this.image = new Image()
        this.image.src = "enemy3.png"
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 218
        this.spriteheight = 177
        this.height = this.spriteheight / 2
        this.width = this.spriteWidth / 2
        this.x = Math.random() * (CANVAS_WIDTH - this.width)
        this.y = Math.random() * (CANVAS_HEIGHT - this.height)

        //controls the speed of the enemies 
        this.frame = 0

        //variable that helps each enemy instance have diffenrent flaps
        this.flapSpeed = Math.floor(Math.random() * 3 + 1)
    }
    update(){
        //this.x = 0
        //this.y = 0 
        if (this.x + this.width < 0) {
            this.x = canvas.width}       
        if (gameFrame % this.flapSpeed === 0) {
            this.frame > 4 ? this.frame = 0 : this.frame ++ }
    }
    draw(){
        ctx.drawImage(this.image , this.frame * this.spriteWidth, 0, this.spriteWidth,this.spriteheight, this.x , this.y , this.width , this.height)
    }
}

for (let i = 0;i < numberofenemies;i++){
    enemiesArray.push(new Enemy())
}

function animate() {
    ctx.clearRect(0 , 0,CANVAS_WIDTH , CANVAS_HEIGHT)
    enemiesArray.forEach(function(enemy){
        enemy.update()
        enemy.draw()
    })
    gameFrame++
    requestAnimationFrame(animate)
}
animate()