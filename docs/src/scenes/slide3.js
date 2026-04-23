class Slide3 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide3" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('demon1', 'assets/slide3/demon1.png')
        this.load.image('demon2', 'assets/slide3/demon2.png');
        this.load.image('demon3', 'assets/slide3/demon3.png');
        this.load.image('demon4', 'assets/slide3/demon4.png');
        this.load.image('demon5', 'assets/slide3/demon5.png');
        this.load.image('demon6', 'assets/slide3/demon6.png');
    }


    create() {
        const { width, height } = this.scale;
        const demon1 = this.add.image(width * 7/8, -100, 'demon1').setScale(0.9);
        const demon2 = this.add.image(width * 1/8, -600, 'demon2').setScale(0.9);
        const demon3 = this.add.image(width * 2 / 8, height * 5 / 8, 'demon3').setAlpha(0).setScale(0.9);
        const demon4 = this.add.image(width * 3 / 8, height * 3 / 8, 'demon4').setAlpha(0).setScale(0.9);
        const demon5 = this.add.image(width * 4 / 8, height * 5 / 8, 'demon5').setAlpha(0).setScale(0.9);
        const demon6 = this.add.image(width * 5 / 8, height * 3 / 8, 'demon6').setAlpha(0).setScale(0.9);
        const drop = '+='+(width+demon2.displayHeight/2+Math.abs(demon2.y));
        this.tweens.chain({
            tweens: [

                {
                    targets: [demon1, demon2],
                    y: drop,
                    duration: 10000,
                    ease: 'Linear',
                    loop: 0
                },
                {
                    targets: demon3,
                    alpha: 1,
                    duration: 2500,
                    ease: 'Power2',
                    loop: 0
                },
                {
                    targets: demon4,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2'
                },
                {
                    targets: demon5,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2'
                },
                {
                    targets: demon6,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2'
                }

            ]
        });








        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', (camera) => {
            this.scene.start('Slide4');
        });
    }
}