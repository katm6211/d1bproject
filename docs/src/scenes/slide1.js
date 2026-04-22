class Slide1 extends Phaser.Scene
    {
        constructor()
        {
            super({ key: "Slide1" });
        }
        preload ()
        {
            this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
            this.load.image('arthur', 'assets/slide1/arthur.png');
            this.load.image('border', 'assets/slide1/border.png')
            this.load.image('dragon', 'assets/slide1/dragon.png');
            this.load.image('flame', 'assets/slide1/flame.png');
            this.load.image('text1', 'assets/slide1/text1.png');
            this.load.image('text2', 'assets/slide1/text2.png');


        }

        create() {
            const {width, height} = this.scale;
            const border = this.add.image(width/4, height/2, 'border');
            border.setDisplaySize(width/2, height); 
            const arthur = this.add.image(width/4, height/2, 'arthur');
            arthur.setScale(0.35); 
            this.time.delayedCall(5000, () => {
                const dragon = this.add.image(800, 0, 'dragon');
                this.tweens.add({
                    targets: dragon,
                    x: 600,
                    y: 100,
                    alpha: 1,
                    duration: 3000,
                    ease: 'Linear',
                    repeat: 0,
                    onComplete: () => {
                        const flame = this.add.image(width*5/8, height*5/8).setAlpha(0);
                        flame.setScale(0.3);
                        this.tweens.add({
                            targets: flame,
                            alpha: 1,
                            duarion: 3000,
                            ease: 'Power2'
                        });
                    }
                });
            }, [], this);

            this.cameras.main.setBackgroundColor("#e0dbc7");
            this.cameras.main.fadeIn(2000, 0, 0, 0);


 
        }
    }