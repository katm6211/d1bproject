class Slide1 extends Phaser.Scene
    {
        constructor()
        {
            super({ key: "Slide1" });
        }
        preload ()
        {
            this.load.setBaseURL('https://katm6211.github.io/d1bproject/');


        }

        create() {
            this.cameras.main.setBackgroundColor("#e0dbc7");
            this.cameras.main.fadeIn(5000, 0, 0, 0);


 
        }
    }