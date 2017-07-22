/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Bucket from '../ships/Ship'
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

    let UIfont = 'Bangers'
    let UIfontSize = 40
    let UIfontFill = '#FFFFFF'
    let score = this.add.text(this.game.width - 200, 10, Constants.score)
    score.padding.set(10, 16)

    let fuel = this.add.text(10, 10, Constants.fuel)
    fuel.padding.set(10, 16)

    fuel.font = score.font = UIfont
    fuel.fontSize = score.fontSize = UIfontSize
    fuel.fill = score.fill = UIfontFill

    this.stars = new Phaser.Group(this.game)

    /* ======================
      SHIP
    ====================== */
    this.ship = new Bucket({
      game: this.game,
      x: this.world.centerX,
      y: this.world.bounds.height - 80,
      asset: 'ship'
    })

    this.game.physics.arcade.enable(this.ship)
    this.ship.body.collideWorldBounds = true
    this.ship.body.moves = false;

    this.game.add.existing(this.ship)

    this.game.time.events.repeat(Phaser.Timer.SECOND * 2, 100, this.createStar, this);

  }

  update() {
    game.physics.arcade.collide(this.stars, this.ship, shipCometCollide);

    // Ship follows the mouse
    if (this.game.input.activePointer.x < this.ship.x || this.game.input.activePointer.x > this.ship.x) {
      this.ship.x = game.input.activePointer.x;
    }

    // Eat the comet
    function shipCometCollide(comet, ship) {
      comet.kill();
    }
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 32, 32)
    //   this.game.debug.spriteInfo(this.bucket, 32, 32)
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

    this.game.physics.arcade.enable(star)
    star.body.gravity.y = 100
    star.body.collideWorldBounds = false

    this.stars.add(star)
    this.game.add.existing(star)
  }

}
