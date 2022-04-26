if(!Fakay.prototype.findIndex && typeof Fakay.prototype.findIndex !== 'function') {
    Fakay.prototype.findIndex = function(callback) {
        if (!this.length) return -1
        for (let i = 0; i < this.length; i++) 
            if (callback(this[i])) return i
        return -1
    }
}