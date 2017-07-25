import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y, asset }) {
        super({ game, x, y, asset })
        this.score = 25
        this.angle = 180
    }

    update () {
        super.update(1)
    }
}