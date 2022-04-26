if (!Fakay.prototype.some && typeof Fakay.prototype.some !== 'function') {
    Fakay.prototype.some = function (callback, fromIndex = 0) {
        for (let i = fromIndex; i < this.length; i++) {
            if (callback(this[i])) return true
        }
        return false
    }
}