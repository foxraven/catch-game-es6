import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    // this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    // this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    // centerGameObjects([this.loaderBg, this.loaderBar])
    // this.load.setPreloadSprite(this.loaderBar)

    // Bg
    this.load.image('space', 'assets/images/bg_space.png')
    this.load.image('homestars', 'assets/images/homestars.svg')

    // Stars
    this.load.image('comet', 'assets/images/stars/comet.png')
    this.load.image('redDwarf', 'assets/images/stars/redDwarf.png')
    this.load.image('neutron', 'assets/images/stars/neutron.png')
    this.load.image('gasCloud1', 'assets/images/stars/gascloud1.png')
    this.load.image('gasCloud2', 'assets/images/stars/gascloud2.png')
    this.load.image('gasCloud3', 'assets/images/stars/gascloud3.png')
    this.load.image('gasCloud4', 'assets/images/stars/gascloud4.png')
    this.load.image('blackhole', 'assets/images/stars/blackhole.png')

    //Ships
    this.load.image('ship', 'assets/images/ship.png')
    this.load.image('shiphome', 'assets/images/shiphome.svg')
    this.load.spritesheet('shipExplosion', 'assets/images/explosion.png')

    // Title
    this.load.image('title', 'assets/images/title.svg')

    // Buttons
    this.load.image('start', 'assets/images/start.svg')
    this.load.image('options', 'assets/images/options.svg')

  }

  create () {

    //aliases to shorten code
    let gw_cent_x = game.world.centerX;
    let gw_cent_y = game.world.centerY;
    let gw_top = game.world.top;
    let gw_bot = game.world.bottom;

    // Home Bg & Images
    this.game.add.tileSprite(0, 0, game.width, game.height, 'space')
    this.game.add.tileSprite(0, 0, game.width, game.height, 'homestars')

    // Title
    this.title = this.game.add.image(gw_cent_x - 96, gw_top + 30, 'title')
    this.title.alpha = 0
    game.add.tween(this.title).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1000)

    // Homeship
    this.shiphome = this.game.add.image(game.world.centerX - 92, game.world.centerY - 90, 'shiphome')
    this.shiphome.alpha = 0
    game.add.tween(this.shiphome).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1000)

    // Buttons
    this.start = this.game.add.button(game.world.centerX - 107, game.world.bottom - 200, 'start', startClick, this)
    this.start.alpha = 0
    game.add.tween(this.start).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1000)
    game.add.tween(this.start.scale).to({ x: 1.05, y: 1.05 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, true)
    game.add.tween(this.start).to({ x: game.world.centerX - 115 }, 800, Phaser.Easing.Linear.None, true, 0, 1000, true)

    this.options = this.game.add.button(game.world.centerX - 80, game.world.bottom - 100, 'options', optionsClick, this)
    this.options.alpha = 0
    game.add.tween(this.options).to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 1000)

    function startClick() {
      this.state.start('Instructions')
    }

    function optionsClick() {

    }

  }

  update() {


  }

}
