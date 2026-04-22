class TitleScene extends Phaser.Scene
    {
        preload ()
        {
            this.load.setBaseURL('https://katm6211.github.io/d1bproject/');

            this.load.image('cathedral', 'assets/title/cathedral.png');

            this.load.image('titletext', 'assets/title/titletext.png');

            this.load.audio('theme', 'assets/title/intromusic.mp3');

        }

        create() {

            const theme = this.sound.add('theme');
            theme.play();

            const cathedral = this.add.image(400, 300, 'cathedral');
            cathedral.setScale(0.5, 0.5); 


            const titletext = this.add.image(400, 470, 'titletext');
            titletext.setScale(0.5, 0.5); 
            this.cameras.main.fadeIn(5000, 0, 0, 0);

            //const text = this.add.text(0, 600, 'Hello world', { fontSize: '32px', fill: '#000' });

            /*this.tweens.add({
                targets: text,
                x: 800,
                y: 0,
                alpha: 0,
                duration: 5000,
                ease: 'Linear',
                repeat: -1 
            });
            const graphics2 = this.add.graphics();
            graphics2.fillStyle(0xff0000, 1); 
            graphics2.fillCircle(200, 200, 60); 

            const graphics1 = this.add.graphics();
            graphics1.fillStyle(0xffffff, 1); 
            graphics1.fillCircle(200, 200, 40); 

            const graphics = this.add.graphics();
            graphics.fillStyle(0xff0000, 1); 
            graphics.fillCircle(200, 200, 20); */


        }
    }