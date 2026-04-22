class Slide1 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide1" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('arthur', 'assets/slide1/arthur.png');
        this.load.image('border', 'assets/slide1/border.png')
        this.load.image('dragon', 'assets/slide1/dragon.png');
        this.load.image('flame', 'assets/slide1/flame.png');
        this.load.image('text1', 'assets/slide1/text1.png');
        this.load.image('text2', 'assets/slide1/text2.png');
        this.load.audio('bgm', 'assets/backgroundmusic.mp3');
    }

    create() {
        const { width, height } = this.scale;
        const border = this.add.image(width / 4, height / 2, 'border');
        border.setDisplaySize(width / 2, height);
        const arthur = this.add.image(width / 4, height / 2, 'arthur');
        arthur.setScale(0.35);


        this.time.delayedCall(5000, () => {
            const dragon = this.add.image(800, 0, 'dragon');
            const flame = this.add.image(width * 5 / 8, height * 3 / 8, 'flame').setAlpha(0).setScale(0.3);
            const text1 = this.add.image(width * 3 / 4, height * 3 / 4, 'text1').setAlpha(0).setScale(0.5);
            const text2 = this.add.image(width * 3 / 4, height * 3 / 4, 'text2').setAlpha(0).setScale(0.5);

            this.tweens.chain({
                tweens: [
                    {
                        targets: dragon,
                        x: 600,
                        y: 100,
                        alpha: 1,
                        duration: 3000,
                        ease: 'Linear'

                    },
                    {
                        targets: flame,
                        alpha: 1,
                        duarion: 3000,
                        ease: 'Power2'
                    },
                    {
                        targets: text1,
                        alpha: 1,
                        duration: 5000,
                        ease: 'Power2'
                    },
                    {
                        targets: text2,
                        alpha: 1,
                        duration: 5000,
                        ease: 'Power2'
                    }
                ]
            });

        }, [], this);

        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);

        if (!this.sound.get('bgm')) {
            let bgm = this.sound.add('bgm', { loop: true });
            bgm.play();
            this.game.sound.add(bgm);
        }

    }
}