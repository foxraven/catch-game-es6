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
        let endText = this.add.text(0, 100, this.reason)
        let endTextScore = this.add.text(0, 200, Constants.endTextScore + this.score)
        let endTextAgain = this.add.text(0, this.game.world.bottom - 350, Constants.endTextAgain)
        endTextAgain.font = endTextScore.font = endText.font = UIfont
        endTextAgain.fontSize = endTextScore.fontSize = endText.fontSize = UIfontSize
        endTextAgain.fill = endTextScore.fill = endText.fill = UIfontFill
        endTextAgain.align = endTextScore.align = endText.align = 'center'
        endTextAgain.centerX = endTextScore.centerX = endText.centerX = this.game.world.centerX

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