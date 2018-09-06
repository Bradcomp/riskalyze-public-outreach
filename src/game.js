function Game() {

}

Game.prototype.start = function() {
    const securities = [{
        symbol: "POO",
        name: "Polymetric Outbound Organisms Inc.",
        riskNumber: 55,
        bestCase: 10,
        worstCase: -5
    }];
    this.view = new View();
    this.state = new State(securities.map(function(sec) {
        return new Security(sec.symbol, sec.name, sec.riskNumber, sec.bestCase, sec.worstCase);
    }));
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
