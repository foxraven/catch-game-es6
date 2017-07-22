import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#000000'
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
  }

  preload () {
    game.load.script("webfont", "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");

    WebFont.load({
      google: {
        families: ['Press Start 2P']
      },
      active: this.fontsLoaded
    })

    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading fonts', { font: '16px Tahoma', fill: '#fff', align: 'center' })
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', './assets/images/loader-bg.png')
    this.load.image('loaderBar', './assets/images/loader-bar.png')

  }


  render () {
    if (this.fontsReady) {
      this.state.start('Splash')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
