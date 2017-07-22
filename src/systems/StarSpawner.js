import Phaser from 'phaser'

export default class extends Phaser.GameObjectFactory {
    constructor (game) {
        super(game)
    }

    CreateStars() {
        let xspawn = this.SetXSpawn()

                
    }

    SetXSpawn() {
        let xspawn = Math.floor(Math.random() * this.world.bounds.width)

        return xspawn
    }
}