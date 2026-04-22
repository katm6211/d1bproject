class Slide1 extends Phaser.Scene
    {
        constructor()
        {
            super({ key: "Slide1" });
        }
        preload ()
        {
            this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
            this.load.image('arthur', 'assets/title/arthur.png');
            this.load.image('border', 'assets/title/border.png')
            this.load.image('dragon', 'assets/title/dragon.png');
            this.load.image('flame', 'assets/title/flame.png');
            this.load.image('text1', 'assets/title/text1.png');
            this.load.image('text2', 'assets/title/text2.png');


        }

        create() {
            
            const border = this.add.image(400, 470, 'border');
            arthur.setScale(0.5, 0.5); 
            const arthur = this.add.image(400, 470, 'arthur');
            this.cameras.main.fadeIn(5000, 0, 0, 0);

            const dragon = this.add.image(800, 0, 'dragon');
            this.time.delayedCall(10000, () => {
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
            this.cameras.main.fadeIn(5000, 0, 0, 0);


 
        }
    }