class Slide2 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide2" });
    }
    preload() {
        this.load.setBaseURL('https://katm6211.github.io/d1bproject/');
        this.load.image('border2', 'assets/slide2/border2.png')
        this.load.image('cat1', 'assets/slide2/cat1.png');
        this.load.image('cat2', 'assets/slide2/cat2.png');
        this.load.image('cat3', 'assets/slide2/cat3.png');
        this.load.image('text1_3', 'assets/slide2/text1_3.png');
    }


    create() {
        const { width, height } = this.scale;
        const border2 = this.add.image(width / 2, height / 2, 'border2').setAlpha(0);
        const text1_3 = this.add.image(420, 200, 'text1_3').setAlpha(0).setScale(0.7);
        const cat1 = this.add.image(width * 3 / 8, height * 3.8 / 8, 'cat1').setAlpha(0).setScale(0.7);
        const cat2 = this.add.image(width * 4.25 / 8, height * 4.5 / 8, 'cat2').setAlpha(0).setScale(0.7);
        const cat3 = this.add.image(width * 6 / 8, height * 3.8 / 8, 'cat3').setAlpha(0).setScale(0.7);

        this.tweens.chain({
            tweens: [
                {
                    targets: border2,
                    alpha: 1,
                    duration: 1000,
                    ease: 'Power2'
                },
                {
                    targets: text1_3,
                    alpha: 1,
                    duration: 2500,
                    ease: 'Power2',
                    yoyo: true,
                    loop: 0
                },
                {
                    targets: cat1,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2'
                },
                {
                    targets: cat2,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2'
                },
                {
                    targets: cat3,
                    alpha: 1,
                    duration: 2000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.scene.start('Slide3');
                    }

                }

            ]
        });








        this.cameras.main.setBackgroundColor("#e0dbc7");
        this.cameras.main.fadeIn(2000, 0, 0, 0);


}
}