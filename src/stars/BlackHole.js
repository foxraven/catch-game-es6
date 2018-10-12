import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'blackhole' })
        this.fuelModifier = -200
        this.speedModifier = 2
        this.score *= this.speedModifier * 1.5
    }

    update () {
        super.update(this.baseSpeed * this.speedModifier)
    }
}