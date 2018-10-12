import Star from '../stars/Star'

export default class extends Star {
    constructor ({ game, x, y }) {
        let graphics = ['gasCloud1', 'gasCloud2', 'gasCloud3', 'gasCloud4']
        let graphicsSelector = Math.round(Math.random() * (graphics.length -1)) 
        super({ game, x, y, asset: graphics[graphicsSelector] })
        this.refuelShip = true
        this.fuelModifier = 50
        this.speedModifier = 1.5
    }

    update () {
        super.update(this.baseSpeed * this.speedModifier)
    }
}