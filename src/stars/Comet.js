import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'comet' })
        this.destroyShip = true
        this.body.gravity.y = 500
    }

    update () {
        super.update(1)
    }
}