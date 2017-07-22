import Star from 'Star'

export default class extends Star {
    constructor ({ game, x, y, asset }) {
        super(game, x, y, asset)
    }

    

    update () {
        super.update(10)
    }
}