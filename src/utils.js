function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
}
function randomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

function randomPick(arr) {
    return arr[randomInt(0, arr.length)];
}