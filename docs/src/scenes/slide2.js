class Slide2 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide2" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('border', 'assets/slide2/border2.png')
        this.load.image('cat1', 'assets/slide2/cat1.png');
        this.load.image('cat2', 'assets/slide2/cat2.png');
        this.load.image('cat3', 'assets/slide2/cat3.png');
        this.load.image('text1_3', 'assets/slide2/text1_3.png');
    }


    create() {
        const border = this.add.image(width * 5 / 8, height * 3 / 8, 'border').setAlpha(0).setScale(0.3);
        








        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);
    }
}