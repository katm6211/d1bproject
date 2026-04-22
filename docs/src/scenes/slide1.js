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
            const border = this.add.image(width/6, height/2, 'border');
            border.setDisplaySize(width/3, height); 
            const arthur = this.add.image(400, 470, 'arthur');
            arthur.setScale(0.5, 0.5); 

            this.time.delayedCall(10000, () => {
                const dragon = this.add.image(800, 0, 'dragon');
                this.tweens.add({
                    targets: dragon,
                    x: 600,
                    y: 100,
                    alpha: 0,
                    duration: 5000,
                    ease: 'Linear',
                    repeat: 0 
                });
            }, [], this);

            this.cameras.main.setBackgroundColor("#e0dbc7");
            this.cameras.main.fadeIn(2000, 0, 0, 0);


 
        }
    }