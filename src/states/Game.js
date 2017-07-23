/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Ship from '../ships/Ship'
import Constants from '../constants'
import StarSpawner from '../systems/StarSpawner'
import Comet from '../stars/Comet'

export default class extends Phaser.State {
  init () {}
  preload () {
    game.load.image('space', 'assets/images/bg_space.png');
  }

  create () {
    //set background
    game.add.tileSprite(0, 0, game.width, game.height, 'space');

    let UIfont = 'Press Start 2P'
    let UIfontSize = 16
    let UIfontFill = '#FFFFFF'
    let score = this.add.text(this.game.width - 90, 10, Constants.score)
    score.padding.set(10, 16)

    let fuel = this.add.text(10, 10, Constants.fuel)
    fuel.padding.set(10, 16)

    fuel.font = score.font = UIfont
    fuel.fontSize = score.fontSize = UIfontSize
    fuel.fill = score.fill = UIfontFill

    this.stars = this.add.group()

    /* ======================
      SHIP
    ====================== */
    this.ship = new Ship({
      game: this.game,
      x: this.world.centerX,
      y: this.world.bounds.height - 80,
      asset: 'ship'
    })

    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 100, this.createStar, this);
  }

  update() {
    this.stars.forEach(star => this.game.physics.arcade.overlap(this.ship, star, this.shipCometCollide, null, this))

    // Ship follows the mouse
    if (this.game.input.activePointer.x < this.ship.x || this.game.input.activePointer.x > this.ship.x) {
      this.ship.x = game.input.activePointer.x;
    }
  }

  // Eat the comet
  shipCometCollide(ship, star) {
    star.kill();
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.stars, 32, 32)
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    // }
  }

  createStar() {
    let xspawn = Math.floor(Math.random() * this.world.bounds.width)

    let star = new Comet({
      game: this.game,
      x: xspawn,
      y: -100,
      asset: 'comet'
    })

    this.stars.add(star)
  }

}
