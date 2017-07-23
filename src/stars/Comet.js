import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y, asset }) {
        super({game, x, y, asset})
        this.game.physics.arcade.enable(this)
        this.body.collideWorldBounds = false
        this.body.gravity.y = 200
    }

    update () {
        super.update(1)
    }
}