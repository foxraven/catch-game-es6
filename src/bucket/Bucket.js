import Phaser from 'phaser'

export default class extends Phaser.Sprite {


  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0)
    this.movingRight = true
  }

  update () {

    console.log(this.movingRight)

    if (this.x > game.world.width - 66) {
      this.movingRight = false
    }

    if (this.x < 3) {
      this.movingRight = true
    }

    if (this.movingRight) {
      this.x += 10
    } else {
      this.x -= 10
    }

  }

}
