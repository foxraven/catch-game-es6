import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.destroyShip = false
        this.refuelShip = false
        this.score = 0
        this.anchor.setTo(0.5)
        this.game.physics.arcade.enable(this)
        this.body.collideWorldBounds = false
        this.body.gravity.y = 100
        this.game.add.existing(this)
    }

    update (speed) {
        this.y += speed
    }
}