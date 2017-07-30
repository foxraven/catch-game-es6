import Phaser from 'phaser'

export default class extends Phaser.State {
    create () {
        // Home Bg & Images
        this.game.add.tileSprite(0, 0, game.width, game.height, 'space')

        let UIfont = 'Press Start 2P'
        let UIfontSize = 16
        let UIfontFill = '#FFFFFF'
        let startY = 50
        let sectionSpacingY = 100
        let spacingY = 70
        let centerX = this.game.world.centerX - 200

        let style = { font: UIfont, fill: UIfontFill, fontSize: UIfontSize, align: 'center', wordWrap: true, wordWrapWidth: 440 }

        let instructions = this.add.text(centerX, startY, 'Moving will use fuel, when you hit 0 fuel the game ends', style)

        let cometImage = this.add.image(centerX, instructions.y + sectionSpacingY, 'comet')
        let cometText = this.add.text(centerX, cometImage.y + spacingY, 'These will destroy your ship!', style)

        let redImage = this.add.image(centerX, cometText.y + sectionSpacingY, 'redDwarf')
        let neutronImage = this.add.image(centerX + 50, redImage.y, 'neutron')
        let starText = this.add.text(centerX, redImage.y + spacingY, 'Collect these for points!', style)

        let blackHoleImage = this.add.image(centerX, starText.y + sectionSpacingY, 'blackhole')
        let blackHoleText = this.add.text(centerX, blackHoleImage.y + spacingY, 'Collect for lots of points but they use fuel!', style)

        let gasCloudImage = this.add.image(centerX, blackHoleText.y + sectionSpacingY, 'gasCloud3')
        let gasCloudText = this.add.text(centerX, gasCloudImage.y + spacingY, 'Touch these to replenish your fuel!', style)

        this.game.time.events.add(5000, this.startGame, this)
    }

    startGame () {
        this.state.start('Game')
    }
}