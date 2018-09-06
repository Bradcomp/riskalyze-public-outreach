function State(securities) {
    this._securities = securities;
    this._player = {
        targetRiskScore: 0,
        currentSecurities: []
    }
}

State.prototype.addSecurity = function(security) {
    this._player.currentSecurities = this._player.currentSecurities.concat([security]);
    this.normalizeSecurities();
}

State.prototype.removeSecurity = function(security) {
    this._player.currentSecurities = this._player.currentSecurities.filter(function(sec) {
        return sec.symbol !== security.symbol;
    });
    this.normalizeSecurities();
}