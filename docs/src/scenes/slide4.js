class Slide4 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide4" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('bg', 'assets/slide4/background.png')
        this.load.image('banner', 'assets/slide4/banner.png');
        this.load.image('continue1', 'assets/slide4/continue.png');
        this.load.image('credits', 'assets/slide4/credits.png');
        this.load.image('newgame', 'assets/slide4/newgame.png');
        this.load.image('quit', 'assets/slide4/quit.png');
    }


    create() {
        const { width, height } = this.scale;
        let bg = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'bg');


        let scaleX = this.cameras.main.width / bg.width;
        let scaleY = this.cameras.main.height / bg.height;


        let scale = Math.max(scaleX, scaleY);
        bg.setScale(scale).setScrollFactor(0);
        const newgame = this.add.image(width + 100, height * 3.3 / 8, 'newgame').setAlpha(1).setScale(0.25);
        const continue1 = this.add.image(width + 100, height * 4 / 8, 'continue1').setAlpha(1).setScale(0.25);
        const quit = this.add.image(width + 100, height * 4.65 / 8, 'quit').setAlpha(1).setScale(0.20);
        const credits = this.add.image(width + 100, height * 5.3 / 8, 'credits').setAlpha(1).setScale(0.25);

        this.tweens.chain({
            tweens: [

                {
                    targets: newgame,
                    x: 685,
                    duration: 1000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: continue1,
                    x: 685,
                    duration: 1000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: quit,
                    x: 685,
                    duration: 1000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: credits,
                    x: 685,
                    duration: 1000,
                    ease: 'Linear',
                    loop: 0
                }

            ]
        });

        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(1000, 0, 0, 0);
    }
}