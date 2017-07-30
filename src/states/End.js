import Phaser from 'phaser'
import Constants from '../constants'

export default class extends Phaser.State {
    init (playerScore, destroyedByComet) {
        this.score = playerScore
        if(destroyedByComet) {
            this.reason = Constants.endTextDestroyed
        } else {
            this.reason = Constants.endText
        }
    }

    create () {
        // Home Bg & Images
        this.game.add.tileSprite(0, 0, game.width, game.height, 'space')
        this.game.add.tileSprite(0, 0, game.width, game.height, 'homestars')

        // Text
        let UIfont = 'Press Start 2P'
        let UIfontSize = 28
        let UIfontFill = '#FFFFFF'
        let centerX = this.game.world.centerX

        let style = { font: UIfont, fill: UIfontFill, fontSize: UIfontSize, align: 'center', wordWrap: true, wordWrapWidth: 450 }

        let endText = this.add.text(centerX, 100, this.reason, style)
        endText.anchor.setTo(0.5)
        let endTextScore = this.add.text(centerX, 200, Constants.endTextScore + this.score, style)
        endTextScore.anchor.setTo(0.5)
        let endTextAgain = this.add.text(centerX, this.game.world.bottom - 350, Constants.endTextAgain, style)
        endTextAgain.anchor.setTo(0.5)

        // Buttons
        this.start = this.game.add.button(game.world.centerX - 107, game.world.bottom - 200, 'start', startClick, this)
        this.start.alpha = 0
        this.game.add.tween(this.start).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1000)
        this.game.add.tween(this.start.scale).to({ x: 1.05, y: 1.05 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, true)
        this.game.add.tween(this.start).to({ x: game.world.centerX - 115 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, true)

        function startClick() {
            this.state.start('Game')
        }
    }

}