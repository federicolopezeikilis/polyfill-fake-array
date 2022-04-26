if (!Fakay.prototype.every && typeof Fakay.prototype.every !== 'function') {
    Fakay.prototype.every = function (callback) {
        for (let i = 0; i < this.length; i++)
            if (!callback(this[i], i)) return false
        return true
    }
}