class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: "TitleScene" });
    }
    preload() {
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

        this.time.delayedCall(10000, () => {
            this.cameras.main.fadeOut(3500, 0, 0, 0);
        }, [], this);

        this.cameras.main.once('camerafadeoutcomplete', (camera) => {
            this.scene.start('Slide1');
        });

        this.cameras.main.setBackgroundColor("#000000");

    }
}