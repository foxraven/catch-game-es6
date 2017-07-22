import Phaser from 'phaser'

export default class extends Phaser.Sprite {

  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
    this.movingRight = true
    this.inputEnabled = true;
    this.input.enableDrag(true);
    this.input.allowVerticalDrag = false;
  }

  update () {


  }
}
