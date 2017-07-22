import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.inputEnabled = true;
    this.input.enableDrag(true);
    this.input.allowVerticalDrag = false;
  }

  update () {

    if (this.x < this.width/2) {
      this.x = this.width/2
    }

    if(this.x > this.game.width - this.width/2) {
      this.x = this.game.width - this.width/2
    }

  }
}
