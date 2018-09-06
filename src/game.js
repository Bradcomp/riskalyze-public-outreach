function Game() {

}

Game.prototype.start = function() {
    var game = this;
   
    var securities = window.data;
    this.view = new View(game);
    this.state = new State(securities.map(function(sec) {
        return new Security(sec.symbol, sec.name, sec.riskNumber, sec.bestCase, sec.worstCase);
    }), game);
};

Game.prototype.newClient = function() {
    const view = this.view;
    const state = this.state;
    getClient()
        .then(function(client) {
            state.client = client;
            view.render(state);
        });
}

Game.prototype.update = function() {
    console.log(this.state.securities.length, this.state.client.securities.length);
}
