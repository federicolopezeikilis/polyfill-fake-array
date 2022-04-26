if (!Fakay.prototype.find && typeof Fakay.prototype.find !== 'function') {
    Fakay.prototype.find = function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i))
                return this[i]
        }
    }
}