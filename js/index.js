const canvas = document.getElementById('mainCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;



const parsedCollisions = collisionsLevel1.parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: '/assets/img/backgroundLevel1.png'
})

const player = new Player();

// controls
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}


function animate() {
    window.requestAnimationFrame(animate);

    // draw lvl 1 background
    backgroundLevel1.draw();
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw();

    })
    // set velocity x after every frame 
    player.velocity.x = 0;

    // conditionals for movement left and right
    
    if (keys.d.pressed) player.velocity.x = 4;
    else if (keys.a.pressed) player.velocity.x = -4;
    
   
    player.draw();
    player.update();

    // player controls


   

}


animate();

