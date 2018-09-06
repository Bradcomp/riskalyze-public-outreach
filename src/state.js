function State(securities) {
    this.securities = securities;
}

State.prototype.addSecurity = function(security) {
    this.client.currentSecurities = this._player.currentSecurities.concat([security]);
    this.normalizeSecurities();
};

State.prototype.removeSecurity = function(security) {
    this.client.currentSecurities = this._player.currentSecurities.filter(function(sec) {
        return sec.symbol !== security.symbol;
    });
    this._securities.concat([security]);
    this.normalizeSecurities();
};

State.prototype.normalizeSecurities = function() {

};
