class Game {
    constructor() {

        const canv = document.getElementById('canvas');
        const div = document.getElementsByTagName('div')[0];
        const ctx = canv.getContext('2d');
        canv.height = div.clientHeight;
        canv.width = div.clientWidth;


        this.loadBird(ctx);

    }

      loadBird(ctx) {
        const bird_img = new Image();
        let frame = 0;

        let sx = 0, sy = 0, sw = 34, sh = 40, dx = 190, dy = 325, dw = 50, dh = 60;
        bird_img.src = '/images/sprite-bird.png';
        bird_img.onload = () => {

            setInterval(function(){
                ++frame;
                sx = frame * 34;
                if(frame==4){
                    frame=0;
                }
              

                ctx.drawImage(bird_img, sx, sy, sw, sh, dx, dy, dw, dh);
               
        },130);
        };
        
        // requestAnimationFrame(function birdAnimation(time) {
        //     requestAnimationFrame(birdAnimation);
        //     ctx.drawImage(bird_img, sx, sy, sw, sh, dx, dy, dw, dh);
            
        //     frame++;
        //     sx = 34 * frame;
            
        //     if (frame > 4) {
        //         sx = 0;
        //         frame = 0;
        //     }
        // });
        
            
        

            
           
        
    }
}



let game = new Game();
// //images
//  const bird_img = new Image();
//  bird_img.src = '/images/sprite-bird.png';
// // bird_img.onload = () => {
// //     ctx.drawImage(bird_img,0,0,33,40,120,325,60,60);
// //   };

// class Sprite{
//     constructor(options){
//         this.ctx = options.ctx;
//         this.image = options.image;
//         this.width = options.width;
//         this.height = options.height;
//         this.numberOfFrames = options.numberOfFrames;
//         this.ticksPerFrame = options.ticksPerFrame;

//         this.start();
//     }

//     start(){
//         alert(this.height);
//     }
// }

// let sprite = new Sprite({
//     ctx: ctx,
//     image: bird_img,
//     width:60,
//     height:60,
//     numberOfFrames: 4,
//     ticksPerFrame: 4
// });





