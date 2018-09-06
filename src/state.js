function State(securities, game) {
    this.securities = securities;
    this.game = game;
}

State.prototype.moveSecurity = function(id) {
    const isTheElement = function(sec) {
        return sec.symbol === id;
    }
    const inSecurities = this.securities.some(isTheElement);
    const elem = inSecurities ? 
      this.securities.find(isTheElement) :
      this.client.securities.find(isTheElement);

    if (inSecurities) {
        this.securities = this.securities.filter(function(sec) {
            return !isTheElement(sec);
        });
        this.client.securities = this.client.securities.concat([elem]);
    } else {
        this.client.securities = this.client.securities.filter(function(sec) {
            return !isTheElement(sec);
        });
        this.securities = this.securities.concat([elem]);
    }

    this.game.update();
}
