/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Bucket from '../bucket/Bucket'
import Constants from '../constants'
import StarSpawner from '../systems/StarSpawner'
import Comet from '../stars/Comet'

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
    fuel.fill = '#FFFFFF'

    this.bucket = new Bucket({
      game: this.game,
      x: this.world.centerX,
      y: this.world.bottom ,
      asset: 'bucket'
    })

    this.game.add.existing(this.bucket)

    this.comet = new Comet({
      game: this.game,
      x: this.world.centerX,
      y: this.world.top,
      asset: 'comet'
    })

    this.game.add.existing(this.comet)
  }

  render () {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 32, 32)
    //   this.game.debug.spriteInfo(this.bucket, 32, 32)
    // }
  }
}
