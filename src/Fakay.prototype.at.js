if (!Fakay.prototype.at && typeof Fakay.prototype.at !== 'function') {
    Fakay.prototype.at = function (index) {
        if (index >= 0) {
            return this[index]
        } else {
            return this[this.length + index]
        }
    }
}
