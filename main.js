const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

let x = 100;
let y = 100;

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'green ';
    ctx.fillRect(x,y,100,100);
    if (y == canvas.height - 100 ){
        y = canvas.height - 100;
    }
    else{
        y++;
    }
    

}

animate();
