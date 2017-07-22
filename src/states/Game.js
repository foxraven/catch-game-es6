/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Bucket from '../bucket/Bucket'
import Constants from '../constants'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    //const bannerText = 'Phaser + ES6 + Webpack!'
    let banner = this.add.text(this.world.centerX, this.game.height - 30, Constants.bannerText)

    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

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
      y: this.world.centerY,
      asset: 'mushroom'
    })

    this.game.add.existing(this.bucket)

  }

  render () {
    if (__DEV__) {
      this.game.debug.spriteInfo(this.mushroom, 32, 32)
      this.game.debug.spriteInfo(this.bucket, 32, 32)
    }
  }
}
