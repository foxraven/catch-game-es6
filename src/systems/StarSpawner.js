import Phaser from 'phaser'
import Comet from '../stars/Comet'

export default class extends Phaser.GameObjectFactory {
    constructor (game) {
        super(game)
        this.spawnrate = 2000
    }
}