/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Bucket from '../bucket/Bucket'
import Constants from '../constants'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let UIfont = 'Bangers'
    let banner = this.add.text(this.world.centerX, 30, Constants.bannerText)

    banner.font = UIfont
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    let score = this.add.text(this.game.width - 200, 10, Constants.score)
    score.font = UIfont
    score.padding.set(10, 16)
    score.fill = '#fff'

    let fuel = this.add.text(10, 10, Constants.fuel)
    fuel.font = UIfont
    fuel.padding.set(10, 16)

    this.mushroom = new Mushroom({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.mushroom)

    this.bucket = new Bucket({
      game: this.game,
      x: this.world.centerX,
      y: this.world.bottom - 80,
      asset: 'bucket'
    })

    // this.bucket.body.collideWorldBounds = true;

    this.game.add.existing(this.bucket)

  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
      // this.game.debug.spriteInfo(this.bucket, 32, 32)
    }
  }
}
