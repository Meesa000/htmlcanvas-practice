class Player {
    constructor(){
        this.position = {
            x: 0,
            y: 400,
        }
        
        this.velocity =  {
            x: 0,
            y: 0

        }

        this.gravity = 1

        

        this.width = 100
        this.height = 100

        this.sides = {
            bottom:this.position.y + this.height,
            side:this.position.x + this.width
            

            
          }
        }

    draw(){
        ctx.fillStyle = 'green ';
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);

    }

    update(){
       
        this.position.x += this.velocity.x;
        this.sides.side = this.position.x + this.width;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        //above bottom of canvas
        if (this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity;
        }
        else {
            this.velocity.y = 0;
        }

        

        if (this.sides.side + this.velocity.x < canvas.width) {
            this.velocity.x;
           
        } 
        else {
            this.velocity.x = 0;
        }
    }
}   
