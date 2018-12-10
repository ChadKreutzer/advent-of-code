module.exports = function findTaxiDistance(target, loc) {
    return Math.abs(+target[0] - +loc[0]) + Math.abs(+target[1] - +loc[1]);
}
