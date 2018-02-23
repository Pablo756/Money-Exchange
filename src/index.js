// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};

    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if (currency < 0){
        return {};
    }
    let rH = currency%50;
    let H = (currency-rH)/50;

    let rQ = rH%25;
    let Q = (rH - rQ)/25;

    let rD = rQ%10;
    let D = (rQ - rD)/10;

    let P = rD%5;
    let N = (rD - P)/5;

    if (H !== 0) {
        result["H"] = H;
    }

    if (Q !== 0) {
        result["Q"] = Q;
    }

    if (D !== 0) {
        result["D"] = D;
    }

    if (N !== 0) {
        result["N"] = N;
    }

    if (P !== 0) {
        result["P"] = P;
    }

    return result;

}
