class Slide0 extends Phaser.Scene {
    constructor() {
        super({ key: "Slide0" });
    }
    preload() {
        this.cameras.main.setBackgroundColor("#000000");

    }

    create() {
        const { width, height } = this.scale;
        this.add.text(250, 300, 'Press Any Key or Click to Start', { fill: '#fff' });
        const startGame = () => {
            this.input.keyboard.off('keydown', startGame);
            this.input.off('pointerdown', startGame);
            this.scene.start('TitleScene');
        };
        this.input.keyboard.on('keydown', startGame);
        this.input.on('pointerdown', startGame);

    }
}