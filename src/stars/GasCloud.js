import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        super({ game, x, y, asset: 'gasCloud1' })
        this.refuelShip = true
    }

    update () {
        super.update(1)
    }
}