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

    game.update();
}

Game.prototype.update = function() {
    let portfolio = calculatePortfolioRating(this.state.client.securities);
    let score = calculateProfileScore(this.state.client);

    this.view.renderPortfolio(portfolio);
    this.view.renderScore(score);

    console.log(this.state.securities.length, this.state.client.securities.length);
}
