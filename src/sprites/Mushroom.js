import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.movingRight = true
  }

  update () {
    if (this.x > game.world.width - 100) {
      this.movingRight = false
    } 

    if (this.x < 100) {
      this.movingRight = true
    }

    if (this.movingRight) {
      this.x += 5
      this.angle += 10
    } else {
      this.x -= 5
      this.angle -= 10
    }

  }
}
