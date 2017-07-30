export default class {
    constructor () {
        this.url = 'http://localhost:60393/api/score'
    }

    getScores () {
        let returnData = null
        fetch(this.url)
        .then(function(data) {
            returnData = data.text()
        })

        return returnData
    }
}