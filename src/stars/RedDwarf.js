import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'redDwarf' })
        this.score = 10
    }

    update () {
        super.update(1)
    }
}