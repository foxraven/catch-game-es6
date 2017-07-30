/* globals __DEV__ */
import Phaser from 'phaser'
import Ship from '../ships/Ship'
import Constants from '../constants'
import Comet from '../stars/Comet'
import RedDwarf from '../stars/RedDwarf'
import Neutron from '../stars/Neutron'
import GasCloud from '../stars/GasCloud'
import BlackHole from '../stars/BlackHole'

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
    this.scoreText = this.add.text(this.game.width - 170, 10, Constants.score)
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

    this.previousX = this.ship.x

    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 10000, this.createStar, this);
  }

  update() {
    this.stars.forEach(star => this.game.physics.arcade.overlap(this.ship, star, this.shipCometCollide, null, this))

    // Ship follows the mouse
    if (this.game.input.activePointer.x < this.ship.x || this.game.input.activePointer.x > this.ship.x) {
      this.ship.x = game.input.activePointer.x;
    }

    let fuelUsed = Math.abs(this.previousX - this.ship.x)

    this.fuel -= (fuelUsed + 0.05)

    if(this.fuel <= 0) {
      this.state.start('End', true, false, this.score)
    }

    this.scoreText.text = Constants.score + this.score
    this.fuelText.text = Constants.fuel + Math.floor(this.fuel)
    this.previousX = this.ship.x
  }

  // Eat the comet
  shipCometCollide(ship, star) {
    if (star.destroyShip == true) {
      this.state.start('End', true, false, this.score, true)
    } else if (star.refuelShip == true) {
      this.fuel += star.fuelModifier
    } else {
      this.score += star.score
      this.fuel += star.fuelModifier
      star.kill();
    }
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.ship, 32, 32)
    //   this.game.debug.spriteInfo(this.stars, 32, 32)
    // }
  }

  createStar() {
    let xspawn = Math.round(Math.random() * this.game.width)

    if(xspawn > 430) {
      xspawn = 430
    }

    let whichStar = Math.random()

    let star = null

    if(whichStar < 0.2) {
      star = new GasCloud({
        game: this.game,
        x: xspawn,
        y: -100
      })
    } else if (whichStar < 0.4) {
        star = new RedDwarf({
          game: this.game,
          x: xspawn,
          y: -100
        })
    } else if (whichStar < 0.6) {
        star = new Comet({
          game: this.game,
          x: xspawn,
          y: -100
      })
    } else if (whichStar < 0.8) {
      star = new Neutron({
        game: this.game,
        x: xspawn,
        y: -100
      })
    } else {
      star = new BlackHole({
        game: this.game,
        x: xspawn,
        y: -100
      })
    }
    this.stars.add(star)
  }

}
