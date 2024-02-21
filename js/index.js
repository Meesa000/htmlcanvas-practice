const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;


const player = new Player();


function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
   
    player.draw();
    player.update();

   

}

animate();

// player controls
window.addEventListener('keydown', (event) => {

    switch(event.key){

        case 'w':
            if (player.velocity.y == 0)
                player.velocity.y = -20;
            break

        case 'a':
            // move to left
             player.velocity.x = -4
             break

        case 'd':
            // move to right
            player.velocity.x = 4
            break

    }


})
// key release event for left and right
window.addEventListener('keyup', (event) => {

    switch(event.key) {

        case 'a':
            player.velocity.x = 0;
            break
        case 'd':
            player.velocity.x = 0;
            break
    }

    
       
})