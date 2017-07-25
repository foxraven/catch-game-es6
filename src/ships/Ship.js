import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.inputEnabled = true
    this.input.enableDrag(true)
    this.input.allowVerticalDrag = false
    this.game.physics.arcade.enable(this)
    this.body.collideWorldBounds = true
    this.body.moves = false;
    this.game.add.existing(this)
  }

  update () {

    // Set the x coordinated of the ship so they don't collide with the edges
    if (this.x < this.width / 2 + 10) {
      this.x = (this.width / 2) + 10
    }

    if(this.x > this.game.width - this.width / 2 - 10) {
      this.x = (this.game.width - this.width / 2) - 10
    }

    // Set the x coordinated of the ship it stays at the bottom
    this.currentYCoords = (this.game.height - this.height) + 20

    if (this.y > this.currentYCoords || this.y < this.currentYCoords) {
      this.y = this.currentYCoords
    }
  }
}
