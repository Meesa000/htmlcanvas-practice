const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

class Player {
    constructor(){
        this.position = {
            x: 100,
            y: 100
        }

        this.width = 100
        this.height = 100
        this.sides = {
            bottom:this.position.y + this.height
            
          }
        }

    draw(){
        ctx.fillStyle = 'green ';
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);

    }

    update(){
        if (this.sides.bottom < canvas.height) {
            this.position.y++;
            this.sides.bottom = this.position.y + this.height;

        }
    }
}   

const player = new Player();

// let bottom = y + playerHeight;

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
   
    player.draw();
    player.update();

   

}

animate();
