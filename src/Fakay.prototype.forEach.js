if (!Fakay.prototype.forEach && typeof Fakay.prototype.forEach !== 'function') {
    Fakay.prototype.forEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            const currElem = this[i]
            callback(currElem)
        }
    }
}