import Phaser from 'phaser'
import Comet from '../stars/Comet'

export default class extends Phaser.GameObjectFactory {
    constructor (game) {
        super(game)
        this.spawnrate = 2000
    }

    CreateStars() {
        let xspawn = this.SetXSpawn()

        let time = Math.round(this.game.time.now / 100) * 100

        if ((time % this.spawnrate) == 0) {

            let star = new Comet({
            game: this.game,
            x: xspawn,
            y: 100,
            asset: 'comet'
            })

            this.game.physics.arcade.enable(star)
            star.body.gravity.y = 100
            star.body.collideWorldBounds = false
            
            // console.log(star)
            return star
        }

        return null
    }

    SetXSpawn() {
        let xspawn = Math.floor(Math.random() * this.world.bounds.width)

        return xspawn
    }
}