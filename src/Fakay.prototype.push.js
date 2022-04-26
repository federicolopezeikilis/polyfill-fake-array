if (!Fakay.prototype.push && typeof Fakay.prototype.push !== 'function') {
    Fakay.prototype.push = function () {

        for (let i = 0; i < arguments.length; i++) {
            this[this.length++] = arguments[i]
        }

        return this.length

    }
}