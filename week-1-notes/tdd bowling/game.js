// frame scores

function scoreFrame (frame, nextFrame, nextNextFrame, i) {
    const [ball1, ball2] = frame
    const ball3 = nextFrame ? nextFrame[0] : frame.length == 3 ? frame[2] : 0
    
     
    //const ball3 ternary from above
    // let ball3 = 0;
    // if(nextFrame){
    //     ball3 = nextFrame[0];
    // } else if (frame.length == 3){
    //     ball3 = frame[2]
    // } else {
    //     ball3 = 0;
    // }

    let score = ball1 + ball2
    if (score >= 10) score += ball3
    if (ball1 == 10) score += nextFrame ? nextFrame[1] : 0
    if (ball1 == 10 && ball3 == 10) score += nextNextFrame ? nextNextFrame[0] : 0
    return score
}

const scoreGame = frames => frames.reduce((total, frame, i) => total += scoreFrame(frame, i < 9 ? frames[i + 1] : null, i < 8 ? frames[i + 2] : 0), 0)

module.exports = {
    scoreFrame,
    scoreGame
}
