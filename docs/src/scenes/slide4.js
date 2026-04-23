class Slide2 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide2" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('background', 'assets/slide2/border2.png')
        this.load.image('banner', 'assets/slide2/banner.png');
        this.load.image('continue1', 'assets/slide2/continue.png');
        this.load.image('credits', 'assets/slide2/credits.png');
        this.load.image('newgame', 'assets/slide2/newgame.png');
        this.load.image('quit', 'assets/slide2/quit.png');
    }


    create() {
        const { width, height } = this.scale;
        const background = this.add.image(width / 2, height / 2, 'background').setAlpha(0);
        const banner = this.add.image(420, 200, 'banner').setAlpha(0).setScale(0.7);
        const continue1 = this.add.image(width * 3 / 8, height * 3.8 / 8, 'continue1').setAlpha(0).setScale(0.7);
        const credits = this.add.image(width * 4.25 / 8, height * 4.5 / 8, 'credits').setAlpha(0).setScale(0.7);
        const newgame = this.add.image(width * 4.25 / 8, height * 4.5 / 8, 'newgame').setAlpha(0).setScale(0.7);
        const quit = this.add.image(width * 6 / 8, height * 3.8 / 8, 'quit').setAlpha(0).setScale(0.7);

        this.tweens.chain({
            tweens: [

                {
                    targets: newgame,
                    y: 200,
                    x: 500,
                    duration: 10000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: continue1,
                    y: 250,
                    x: 500,
                    duration: 10000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: quit,
                    y: 300,
                    x: 500,
                    duration: 10000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: credits,
                    y: 350, 
                    x: 500,
                    duration: 10000,
                    ease: 'Linear',
                    loop: 0
                }

            ]
        });








        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);
    }
}