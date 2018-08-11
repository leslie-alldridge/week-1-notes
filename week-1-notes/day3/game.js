// Score 119:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]; 
// Score 141:
var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
]
//set a max score increase to 30 so that a perfect game might be ok
// var frames = [
//     [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
//   ]
let score = 0,
	totalScore = 0,
	bonusSwitch = 0, //flick a switch
	bonusScore = 0, //add the bonus on
	finalFrame = 0;

function scoreTotal(frames) {
	//perfect game code (not done yet)
	if (frames[9].length <= 2) {
		frames[9].push(0)
		finalFrame += (frames[9][0] + frames[9][1]);
		totalScore += finalFrame;
	} else if (frames[9].length = 3) {
		finalFrame += (frames[9][0] + frames[9][1] + frames[9][2]);
		totalScore += finalFrame;
	}
	console.log(frames);
	// loop goes thru array and reads every score
	for (let i = 0; i < frames.length - 1; i++) {
		// we will reset score because a new frame has started
		score = 0
		//final frame logic to capture last bowl
		if (frames[i].length > 2 && frames[i - 1][0]) {
			score += frames[i][2];
		}
		// loop through the frame
		for (let n = 0; n < 2; n++) {
			// add the frame value to score when there's no strike
			if (bonusSwitch === 0) {
				score += frames[i][n];
				//bowls a spare logic, score total is ten but the first bowl wasn't a strike
				if (score === 10 && frames[i][0] !== 10) {
					score += frames[i + 1][0];
				}
			}
			// for the second bowl in the current frame
			if (n === 1) {
				//if your score is 10 but the second bowl is a 0, turn on the strike switch
				if (score >= 10 && frames[i][1] === 0 && bonusSwitch === 0) {
					bonusSwitch = 1; //switch is now on
				}
				// adding your frame score to total score
				totalScore += score;
			}
			// switch is on, so read next bowl (nextNum)
			if (bonusSwitch === 1 && frames[i + 1].length < 3) {
				let nextNum = (frames[i + 1][0]);
				//if a double strike occurs
				if (nextNum == 10) {
					//read two frames ahead from i 
					let nextNum = (frames[i + 2][0]);
					//get the values and add to totalscore
					bonusScoreDouble = (frames[i + 1][0] + frames[i + 2][0]);
					totalScore += ((bonusScoreDouble += 10));
					console.log("hey im a double" + bonusScoreDouble);
				} else {
					//single strike logic
					bonusScore = (frames[i + 1][0] + frames[i + 1][1]);
					console.log(bonusScore)
					//add the next two bowls to total score
					totalScore += (bonusScore);
					//turn off strike switch cause only one strike happened
					bonusSwitch = 0;
				}
			}
		}
	}
	console.log("finalscore is " + totalScore + "!!");
}
scoreTotal(frames);
