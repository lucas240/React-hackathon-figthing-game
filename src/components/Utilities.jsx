
module.exports.sleep = function (ms) {
    // Temporise par le temps passé en argument
    const start = new Date().getTime() // Snapshot of the time
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > ms) { 
            break;
        }
    }
}

module.exports.random = function (max) {
    // génère un nombre entre 0 et max
    return Math.floor(Math.random() * Math.floor(max))
}