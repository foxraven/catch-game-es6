import Phaser from 'phaser'
import Comet from '../stars/Comet'

export default class extends Phaser.GameObjectFactory {
    constructor (game) {
        super(game)
        this.spawnrate = 1000
    }

    CreateStars() {
        let xspawn = this.SetXSpawn()
        
        if ((this.game.time.now % this.spawnrate) == 0) {

            let star = new Comet({
            game: this.game,
            x: this.world.centerX,
            y: this.world.top,
            asset: 'comet'
            })

            this.game.physics.arcade.enable(star)
            star.body.gravity.y = 100
            star.body.collideWorldBounds = false

            return star
        }

        return undefined
    }

    SetXSpawn() {
        let xspawn = Math.floor(Math.random() * this.world.bounds.width)

        return xspawn
    }
}