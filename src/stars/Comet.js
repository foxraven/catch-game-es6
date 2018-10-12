import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'comet' })
        this.destroyShip = true
        this.body.gravity.y += 100
        this.speedModifier = 6
    }

    update () {
        super.update(this.baseSpeed * this.speedModifier)
    }
}