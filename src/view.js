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

    this.renderClient(state.client);
};

View.prototype.renderClient = function(client) {
    var clientImage = document.getElementById("client-image");
    clientImage.src = client.imageURL;

    var clientNameContainer = document.getElementById("client-name");
    clientNameContainer.innerHTML = "";
    clientNameContainer.innerText = client.firstName + " " + client.lastName;

    var riskNumberImage = document.getElementById("client-risk-number");
    riskNumberImage.src = "risk-numbers/r" + client.riskNumber + ".svg";

    var clientGoalSpan = document.getElementById("client-goal");
    clientGoalSpan.innerHTML = "";
    clientGoalSpan.innerText = client.goal;
    this.renderScore(0);
};

View.prototype.renderPortfolio = function (portfolio) {
    var riskNumberImage = document.getElementById("portfolio-risk-number");
    riskNumberImage.src = "risk-numbers/r" + portfolio.riskNumber + ".svg";

    var bestCase = document.getElementById("portfolio-best-case-number");
    bestCase.innerHTML = "";
    bestCase.innerHTML = portfolio.bestCase.toFixed(4);

    var worstCase = document.getElementById("portfolio-worst-case-number");
    worstCase.innerHTML = "";
    worstCase.innerHTML = portfolio.worstCase.toFixed(4);
};

View.prototype.renderScore = function (score) {
    var scoreElement = document.getElementById("score-value");
    scoreElement.innerHTML = "";
    scoreElement.innerHTML = score.toFixed(0);
};

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
