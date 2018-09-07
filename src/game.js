function Game() {

}

Game.prototype.start = function() {
    var game = this;
   
    this.view = new View(game);
    this.state = new State(this.getSecurities(), game);
};

Game.prototype.getSecurities = function() {
    return window.data.map(function(sec) {
        return new Security(sec.symbol, sec.name, sec.riskNumber, sec.bestCase, sec.worstCase);
    })
}

Game.prototype.newClient = function() {
    var view = this.view;
    var state = this.state;
    var game = this;
    getClient()
        .then(function(client) {
            state.securities = game.getSecurities();
            state.client = client;
            view.render(state);
        });
}

Game.prototype.update = function() {
    console.log(this.state.securities.length, this.state.client.securities.length);
}
