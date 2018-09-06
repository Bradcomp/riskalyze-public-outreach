function View() {}

View.prototype.render = function(state) {
    document.appendChild(JSON.stringify(state));
}