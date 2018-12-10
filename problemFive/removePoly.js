module.exports = function removePoly(input, poly) {
    const reg = new RegExp(poly, 'gi');
    return input.replace(reg, '');
};