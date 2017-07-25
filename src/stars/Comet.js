import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y, asset }) {
        super({ game, x, y, asset })
        this.score = 10
    }

    update () {
        super.update(1)
    }
}