const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;


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
