/* globals __DEV__ */
import Phaser from 'phaser'
import Ship from '../ships/Ship'
import Constants from '../constants'
import StarSpawner from '../systems/StarSpawner'
import Comet from '../stars/Comet'
import RedDwarf from '../stars/RedDwarf'

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
    this.score = 0
    this.scoreText = this.add.text(this.game.width - 150, 10, Constants.score)
    this.scoreText.padding.set(10, 16)

    this.fuel = 2000
    this.fuelText = this.add.text(10, 10, Constants.fuel)
    this.fuelText.padding.set(10, 16)

    this.fuelText.font = this.scoreText.font = UIfont
    this.fuelText.fontSize = this.scoreText.fontSize = UIfontSize
    this.fuelText.fill = this.scoreText.fill = UIfontFill

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

    let startX = this.ship.x

    // Ship follows the mouse
    if (this.game.input.activePointer.x < this.ship.x || this.game.input.activePointer.x > this.ship.x) {
      this.ship.x = game.input.activePointer.x;
    }

    let endX = this.ship.x
    let fuelUsed = Math.abs(startX - endX)

    this.fuel -= fuelUsed

    if(this.fuel <= 0) {
      this.state.start('End', true, false, this.score)
    }

    this.scoreText.text = Constants.score + this.score
    this.fuelText.text = Constants.fuel + this.fuel
  }

  // Eat the comet
  shipCometCollide(ship, star) {
    this.score += star.score
    star.kill();
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.stars, 32, 32)
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    // }
  }

  createStar() {
    let xspawn = Math.floor(Math.random() * this.game.width)

    let whichStar = Math.random()

    let star = null

    if(whichStar > 0.49) {
      star = new Comet({
        game: this.game,
        x: xspawn,
        y: -100,
        asset: 'comet'
    })
    } else {
      star = new RedDwarf({
        game: this.game,
        x: xspawn,
        y: -100,
        asset: 'comet'
      })
    }
    this.stars.add(star)
  }

}
