if (!Fakay.prototype.groupBy && typeof Fakay.prototype.groupBy !== 'function') {
    Fakay.prototype.groupBy = function (callback) {
        const result = {}
        for (let i = 0; i < this.length; i++) {
            const property = callback(this[i])
            if (!result[property]) {
                result[property] = new Fakay(this[i])
            } else {
                result[property][result[property].length++] = this[i]
            }
        }
        return result
    }
}