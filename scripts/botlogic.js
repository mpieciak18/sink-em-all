const randSpot = (otherPlayer) => {
    let spot = '';
    
    while (spot == '') {
        const possiblePlay = Math.ceil(Math.random() * 100);
        const landedHits = otherPlayer.board.landedHits;
        const missedHits = otherPlayer.board.missedHits;
        if (landedHits.includes(possiblePlay) || missedHits.includes(possiblePlay)) {
            continue;
        } else {
            spot = possiblePlay;
        };
    };

    return spot
};

const incSpot = (otherPlayer, firstSpot) => {
    const landedHits = otherPlayer.board.landedHits;
    const missedHits = otherPlayer.board.missedHits;
    const hits = [].concat(landedHits, missedHits);
    hits.sort();

    let spot;

    if (hits.length == 0) {
        spot = firstSpot;
    } else {
        spot = hits[hits.length - 1] + 1;
    };
    return spot
};

const setSpot = (otherPlayer, spotsArr) => {
    const landedHits = otherPlayer.board.landedHits;
    const missedHits = otherPlayer.board.missedHits;
    const hits = [].concat(landedHits, missedHits);

    let spot;

    for (let i = 0; i < spotsArr.length; i++){
        if (hits.includes(spotsArr[i]) == true) {
            continue
        } else {
            spot = spotsArr[i];
            break;
        };
    };

    return spot
};

export {randSpot, incSpot, setSpot};