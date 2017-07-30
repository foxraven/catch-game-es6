import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        let graphics = ['gasCloud1', 'gasCloud2', 'gasCloud3', 'gasCloud4']
        let graphicsSelector = Math.round(Math.random() * 3)
        super({ game, x, y, asset: graphics[graphicsSelector] })
        this.refuelShip = true
        this.fuelModifier = 50
    }

    update () {
        super.update(1)
    }
}