class Slide1 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide1" });
    }
    preload() {
        const { width, height } = this.scale;
        let loadingText = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Loading... 0%', {
            font: '20px Consolas',
            fill: '#ffffff'
        }).setOrigin(0.5);

        this.load.on('progress', (value) => {
            let percentage = Math.floor(value * 100);
            loadingText.setText(`Loading... ${percentage}%`);
        });
        this.load.on('complete', (value) => {
            loadingText.destroy();
            circles.forEach((circle, index) => {
                circle.destroy();
            });
        });
        const r = 50;
        const color = 0xffffff;

        const circle1 = this.add.circle(200, 200, r, color, 1).setAlpha(0);
        const circle2 = this.add.circle(400, 200, r, color, 1).setAlpha(0);
        const circle3 = this.add.circle(600, 200, r, color, 1).setAlpha(0);


        const circles = [circle1, circle2, circle3];

        circles.forEach((circle, index) => {
            this.tweens.add({
                targets: circle,
                alpha: 1,
                duration: 1000,
                delay: index * 300,
                ease: 'Power1',
                yoyo: true,
                loop: -1
            });
        });

        this.load.on('fileprogress', (file) => {
            console.log('Loading asset: ' + file.key);
        });

        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('arthur', 'assets/slide1/arthur.png');
        this.load.image('border', 'assets/slide1/border.png')
        this.load.image('dragon', 'assets/slide1/dragon.png');
        this.load.image('flame', 'assets/slide1/flame.png');
        this.load.image('text1', 'assets/slide1/text1.png');
        this.load.image('text2', 'assets/slide1/text2.png');
    //    this.load.audio('bgm', 'assets/backgroundmusic.mp3');
        this.load.image('text1_2', 'assets/slide1/phase2/text1.2.png');
        this.load.image('text2_2', 'assets/slide1/phase2/text2.2.png');
        this.load.image('rabbit', 'assets/slide1/phase2/rabbit.png');
        this.load.image('rabbitdog', 'assets/slide1/phase2/rabbitdog.png');

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
            const text1_2 = this.add.image(600, 190, 'text1_2').setAlpha(0).setScale(0.6);
            const text2_2 = this.add.image(width * 3 / 4, height * 3 / 4, 'text2_2').setAlpha(0).setScale(0.65);
            const rabbitdog = this.add.image(700, 270, 'rabbitdog').setAlpha(0).setScale(0.8);
            const rabbit = this.add.image(600, 300, 'rabbit').setAlpha(0).setScale(0.8);

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
                        duration: 3000,
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
                        ease: 'Power2',
                        onComplete: () => {
                            this.tweens.add({
                                targets: [text1, text2, dragon, flame],
                                alpha: 0,
                                duration: 1000,
                                ease: 'Power2'
                            })
                        }

                    },
                    {
                        targets: text1_2,
                        alpha: 1,
                        duration: 2000,
                        ease: 'Power2'
                    },
                    {
                        targets: text2_2,
                        alpha: 1,
                        duration: 2000,
                        ease: 'Power2',
                        onComplete: () => {
                            this.tweens.add({
                                targets: [rabbitdog, rabbit],
                                alpha: 1,
                                duration: 2000,
                                ease: 'Power2'
                            })
                        }
                    }


                ]
            });

        }, [], this);

        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', (camera) => {
            this.scene.start('Slide2');
        });

            if (!this.game.sound.get('bgm')) {
                const bgm = this.game.sound.add('bgm', { loop: true });
                bgm.play();
            }

        }
}