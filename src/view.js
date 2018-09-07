function View(game) {
    this.game = game;
    this.securitiesContainer = document.getElementById('securities');
    this.clientSecurities = document.getElementById('client-securities');
    this.dnd = dragula([this.securitiesContainer, this.clientSecurities]);
    
    this.dnd.on('drop', function(el) {
        game.state.moveSecurity(el.id);
    });

    this.addEventListeners();
};

View.prototype.addEventListeners = function() {
    var newClientButton = document.getElementById("new-client-button");
    newClientButton.addEventListener("click", this.game.newClient.bind(this.game));
}

View.prototype.render = function(state) {
    var secs = state.securities;
    var secsContainer = this.securitiesContainer;
    secsContainer.innerHTML = "";
    secs.forEach(function(sec) {
        return addSecurity(secsContainer, sec);
    });

    this.clientSecurities.innerHTML = "";

}

function addSecurity(container, security) {
    var img = document.createElement('img');
    img.src = "risk-numbers/r" + security.riskNumber + ".svg";
    img.alt = "risk number " + security.riskNumber;
    img.classList.add("risk-number-img");
    
    var txt = document.createElement("strong");
    txt.appendChild(document.createTextNode(security.name + " - (" + security.symbol + ")"));
    
    var item = document.createElement('li');
    item.appendChild(txt);
    item.appendChild(img);
    item.id = security.symbol;
    item.classList.add("securities");
    
    container.appendChild(item);
}