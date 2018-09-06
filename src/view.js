function View(game) {
    this.game = game;
    this.securitiesContainer = document.getElementById('securities');
    this.clientSecurities = document.getElementById('client-securities');
    this.dnd = dragula([this.securitiesContainer, this.clientSecurities]);
    
    this.dnd.on('drop', function(el) {
        game.state.moveSecurity(el.id);
    });
}

View.prototype.render = function(state) {
    const secs = state.securities;
    const secsContainer = this.securitiesContainer;
    secsContainer.innerHTML = "";
    secs.forEach(function(sec) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(sec.name + " - (" + sec.symbol + ")"));
        item.id = sec.symbol;
        item.classList.add("securities");
        secsContainer.appendChild(item);
    });

}