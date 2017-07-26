import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'neutron' })
        this.score = 30
    }

    update () {
        super.update(1)
    }
}