
class Bird {
    constructor(params) {
        this.ctx = params.ctx;
        this.div = params.div;
        this.sx = params.sx;
        this.sy = params.sy;
        this.sw = params.sw;
        this.sh = params.sh;
        this.x = params.x;
        this.y = params.y;
        this.width = params.width;
        this.height = params.height;

        this.speed_gravitaion = 1.22;
        this.valueToUp = 85;

        this.frame = 0;
        this.frameCount = 0;

        this.started = false;
        this.lockTimer = false;

        this.bird_img = new Image();
        this.bird_img.src = '/images/sprite-bird.png';

        this.load(this);
        this.animation(this);


    }

    load(params) {
        params.bird_img.onload = () => {
            params.ctx.drawImage(params.bird_img, params.sx, params.sy, params.sw, params.sh, params.x, params.y, params.width, params.height);
        };

    }

    animation(params) {

        window.requestAnimationFrame(function anim() {
            //FPS
            // params.frameCount++;
            // if (params.frameCount < 10) {
            //     window.requestAnimationFrame(anim);
            //     return;
            // }
            // params.frameCount = 0;

            params.frame++;
            params.frame = params.frame >= 4 ? 0 : params.frame;
            params.sx = 34 * params.frame;
            // if (!params.started) {
            //     params.y += 5;
            //     if (params.y > 330) params.y -= 10;
            // }
            params.ctx.clearRect(params.x, params.y - 50, params.width, 115);
            params.ctx.drawImage(
                params.bird_img,
                params.sx, params.sy,
                params.sw, params.sh,
                params.x, params.y,
                params.width, params.height);
            window.requestAnimationFrame(anim);
        });
        if (!params.started) {
            document.addEventListener('keydown', (e) => {
                if (e.key == ' ') {
                    if (!this.started) {
                        this.turn_on_gravitation();
                    }
                    this.started = true;
                }
            });
        }

    }


    turn_on_gravitation() {

        let id = setInterval(() => {
            this.y += this.speed_gravitaion;
            if (this.y > this.div.clientHeight - 115) {
                clearInterval(id);
            }
        }, 1);

    }
    move_up_bird() {
        let new_y = 0;
        new_y = this.y - this.valueToUp;
        if (new_y > -150) {
            let id = setInterval(() => {
                this.y -= this.speed_gravitaion * 2;
                if (this.y < new_y) {
                    clearInterval(id);
                }
            }, 1);
        }
    }
}
class Earth {
    constructor(params) {
        this.ctx = params.ctx;
        this.earth_img = new Image();
        this.earth_img.src = '/images/spr_earth.png';
        this.x = params.x;
        this.y = params.y;
        this.loadEarth(this);
    }
    loadEarth(params) {
        params.earth_img.onload = () => {
            params.ctx.drawImage(params.earth_img, params.x, params.y);

            for(let i=0; i<23; i++){
                params.x+=20;
                params.ctx.drawImage(params.earth_img, params.x, params.y);
            }
        };
    }
}


class Game {
    constructor() {

        const canv = document.getElementById('canvas');
        const div = document.getElementsByTagName('div')[0];
        const ctx = canv.getContext('2d');
        canv.height = div.clientHeight;
        canv.width = div.clientWidth;

        let bird = new Bird({ div: div, ctx: ctx, sx: 0, sy: 0, sw: 34, sh: 40, x: 190, y: 325, width: 50, height: 60 });
        document.addEventListener('keydown', (e) => {
            if (e.key == ' ') {
                bird.move_up_bird();
            }
        });

        let earth = new Earth({ ctx: ctx, x: 0, y: 530 });
    }


}



let game = new Game();








