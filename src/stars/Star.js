import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset)
        this.destroyShip = false
        this.refuelShip = false
        this.fuelModifier = 0
        this.score = 0
        this.anchor.setTo(0.5)
        this.game.physics.arcade.enable(this)
        this.body.collideWorldBounds = false
        this.body.gravity.y = 100
        this.gravityModifier = 0
        this.game.add.existing(this)
    }

    update (speed) {
        this.y += speed
        this.body.gravity.y = this.body.gravity.y * (this.gravityModifier + 1)
    }
}