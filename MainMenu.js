export default class MainMenu extends Phaser.Scene
{
    constructor ()
    {
        super('MainMenu');

        this.music;
        this.state = "main";
    }

    create ()
    {
        let background = this.add.image(400, 300, 'background');

        this.tweens.add({
            targets: background,
            alpha: { from: 0, to: 1 },
            duration: 1000
        });

        const fontStyle = {
            fontFamily: 'Arial',
            fontSize: 48,
            color: '#ffffff',
            fontStyle: 'bold',
            padding: 16,
            shadow: {
                color: '#000000',
                fill: true,
                offsetX: 2,
                offsetY: 2,
                blur: 4
            }
        };

        this.text1 = this.add.text(240, -20, 'Shape Shop', fontStyle);
        this.tweens.add({
            targets: this.text1,
            duration: 2000,
            y: {start: 0, to: this.game.canvas.height/2 - this.text1.height},
            ease: 'bounce.out',
            
        });
        // let logo = this.add.image(400, -200, 'logo');

        // if (!this.music)
        // {
        //     this.music = this.sound.play('music', { loop: true });
        // }

        // this.tweens.add({
        //     targets: logo,
        //     y: 300,
        //     ease: 'bounce.out',
        //     duration: 1200
        // });

        this.input.once('pointerdown', () => {
            this.state = "intro";
            this.add.image(400, 300, 'background');
            let intro = this.add.image(400,300, 'intro');

            this.tweens.add({
                targets: intro,
                alpha: { from: 0, to: 1 },
                duration: 100
            });

            this.input.once('pointerdown', () => {
                this.state = "game";
                this.scene.start('LevelSelect', {colorblind: false});
            })
        });
    }
}

