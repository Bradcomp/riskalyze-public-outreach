function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
}
function randomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

function randomPick(arr) {
    return arr[randomInt(0, arr.length)];
}

//todo fix the properties of the inputs
function calculateProfileScore(client) {
    console.log(client.securities);
    let portfolio = calculatePortfolioRating(client.securities);
    console.log(portfolio);
    let score = (portfolio.worstCase + ((portfolio.bestCase - portfolio.worstCase) / 2)) - client.goal;
    score = 10 + score;

    console.log(score);
    
    let riskNumberDiff = Math.abs(client.riskNumber - portfolio.riskNumber);
    
    if (riskNumberDiff <= 5) {
        return score * 999;
    }
    else if (riskNumberDiff <= 10) {
        return score * 499;
    }
    else if (riskNumberDiff <= 20) {
        return score * 249;
    }
    else if (riskNumberDiff <= 30) {
        return score * 99;
    } else {
        return 0;
    }
}

//todo fix security properties
function calculatePortfolioRating(securities) {
    let totalRiskNumber = 0;
    let totalMax = 0;
    let totalMin = 0;

    let averageRiskNumber = 0;
    let averageMax = 0;
    let averageMin = 0;

    if (securities.length != 0) {
        securities.forEach(function (security) {
            totalRiskNumber += security.riskNumber;
            totalMax += security.bestCase;
            totalMin += security.worstCase;
        });

        averageRiskNumber = Math.round(totalRiskNumber / securities.length);
        averageMax = totalMax / securities.length;
        averageMin = totalMin / securities.length;
    }

    return {
        "riskNumber" : averageRiskNumber,
        "bestCase" : averageMax,
        "worstCase" : averageMin
    };
}
