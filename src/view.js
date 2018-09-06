function View() {}

View.prototype.render = function(state) {
    document.write(JSON.stringify(state));
}