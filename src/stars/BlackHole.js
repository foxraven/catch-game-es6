import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'blackhole' })
        this.score = 150
        this.fuelModifier = -200
    }

    update () {
        super.update(1)
    }
}