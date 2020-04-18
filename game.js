const canv = document.getElementById('field');
const div = document.getElementsByTagName('div')[0];
const ctx = canv.getContext('2d');

canv.height = div.clientHeight;
canv.width = div.clientWidth;


let SPEED_MOVING_OBJECT = 3.5;
let SCORE = 0;
let lose = false;

const bg = new Image();
bg.src = '/images/bg1.png';

const bird = {
    sprite: new Image(),

    x: canv.width / 2 - 33,
    y: canv.height / 2,

    width_height: 34,
    sprite_width_height: 53,

    frame: 0,
    period: 0,
    value_for_jumping: 75,
    jumped: false,
    start_point_jump: 0,

    gravitation: function () {
        if (this.y < 535) {
            this.y += 5;
        }
    },
    jump: function () {
        if (this.jumped) {
            this.y < this.start_point_jump - this.value_for_jumping ? this.jumped = false : this.y -= 10;
        }
    },
    frame_regulation: function () {
        this.period += 0.1;
        if (this.period >= 1) {
            this.frame = this.frame != 3 ? this.frame + 1 : this.frame = 0;
            this.period = 0;
        }
    },
    lose: function(){
        if(this.y + this.width_height + 1 >= earth.height){
            lose = true;
        }
        /////////////////////////////////////YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
        if(this.x + this.width_height + 1 == block.x - block.move ){
            
        }
        console.log('bird : ' + this.x + ', ' + 'block : ' + block.x);

    }
}
const earth = {
    sprite: new Image(),
    count: 0,
    move: 0,
    x: 25,
    y: 570,
    draw: function () {
        this.move += SPEED_MOVING_OBJECT;

        for (this.count = 0; this.count < 35; this.count++) {
            if (this.move >= 400) this.move = 0;
            ctx.drawImage(this.sprite, this.x * this.count - this.move, this.y, 25, 100);
        }
    }
}
const block = {
    sprite: new Image(),
    start_x: 400,
    y: (Math.random() * -250) - 100,
    x: canv.width,
    width: 85,
    height: 1000,
    move: 0,
    draw: function () {
        this.move += SPEED_MOVING_OBJECT;
       
        if (this.move >= canv.width + this.width + 100) {
            this.y = (Math.random() * -250) - 100;
            this.move = 0;
        }
        ctx.drawImage(this.sprite, this.x - this.move, this.y, this.width, this.height);
    }
}


earth.sprite.src = '/images/spr_earth.png';
bird.sprite.src = '/images/sprite-bird.png';
block.sprite.src = '/images/spr_block.png';


function draw() {
    ctx.drawImage(bg, 0, 0, canv.width, canv.height);

    ctx.drawImage(bird.sprite, bird.frame * bird.width_height, 0,
        bird.width_height, bird.width_height,
        bird.x, bird.y,
        bird.sprite_width_height, bird.sprite_width_height);
    block.draw();
    earth.draw();
}
function update() {
    draw();

    bird.frame_regulation();
    bird.gravitation();
    bird.lose();
    if (bird.jumped) {
        bird.jump();
    }
    if(lose){
        SPEED_MOVING_OBJECT = 0;
    }


    window.requestAnimationFrame(update);
}

document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
        bird.jumped = true;
        bird.start_point_jump = bird.y;
    }
})




update();