import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'redDwarf' })
        this.speedModifier = 6
        this.score = this.speedModifier * 10
    }

    update () {
        super.update(this.baseSpeed * this.speedModifier)
    }
}