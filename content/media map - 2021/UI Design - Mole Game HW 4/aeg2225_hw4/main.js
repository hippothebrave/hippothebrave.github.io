//INTRO 

console.log("Hello, world!");

//GLOBAL VARIABLES

const timeElement = document.getElementById('time');
const resetElement = document.getElementById('reset_btn');
const scoreElement = document.getElementById('score');

const roundTime = 60; //number of seconds in a round is hardcoded to 60
let timecount = 0; //initialize timecount to 0
let scoreCount = 0; //initialize score to 0
let ongoingGame = false; //initialize 'ongoing game' Boolean
let moleList = new Map();

//OBJECTS
class Mole{

	//constructor
	constructor(holeNum){
		//instantiate hole number of the mole and "unclicked" variable
		this.holeNum = holeNum;
		this.unclicked = true;

		//put in mole picture
		const imgNum = 'img_' + holeNum;
		document.getElementById(imgNum).src = 'mole.png';

		//whack the mole when clicked (only if no prior mole is here)
		if(document.getElementById(imgNum).hasAttribute('listener') !== true){
			document.getElementById(imgNum).addEventListener('click', () => {
				if(ongoingGame && this.unclicked){
					this.whack();
				}
			});
			document.getElementById(imgNum).setAttribute('listener', true);
		}

	}

	hide(){
		//replace with hole picture
		const imgNum = 'img_' + this.holeNum;
		document.getElementById(imgNum).src = 'hole.png';

		//stop allowing whacking
		this.unclicked = false;

		//remove event listener - PROBLEM TO DO ETC
		document.getElementById(imgNum).removeEventListener('click', () => {
			if(ongoingGame && this.unclicked){
				this.whack();
			}
		});
		document.getElementById(imgNum).removeAttribute('listener');

		//remove mole from moleList
		moleList.delete(this.holeNum);
	}

	whack(){
		//hide the mole
		this.hide();
		//update the score
		scoreCount += 30;
		scoreUpdate();
	}
}

//ACTIONS

//reset button - on click, reset score and time
resetElement.addEventListener("click", () => {
	//end current game, log reset
	console.log('Reset clicked.');

	//get rid of moles
	clearMoles();

	//reset title
	titleElement = document.getElementById('title_cont');
	titleElement.innerHTML = 'Whac-A-Mole'
	titleElement.style.background = '#01893f';

	//reset score and time
	scoreCount = 0;
	scoreUpdate();
	timecount = roundTime;
	timeElement.innerHTML = `0:${timecount}`;

	//if new game, start countdown and molemaking for first time
	if(!ongoingGame){
		ongoingGame = true;
		countdown();
		console.log("Started the first countdown.");
		makeMoles();
		console.log("Started the first mole making.");
	}

});

//FUNCTIONS

//clearMoles
function clearMoles(){
	moleList.forEach( (mole) => {
		mole.hide();
		console.log("Game ended - hid a mole");
	});
	moleList.clear();
}

//scoreUpdate - updates and formats score
function scoreUpdate(){
	scoreElement.innerHTML = scoreCount.toString().padStart(3,'0');
}

//countdown function -- makes the time count seconds down to zero
function countdown(){
	if(timecount > 9){
		timeElement.innerHTML = `0:${timecount}`;
		timecount -= 1;
		setTimeout(function(){countdown()}, 1000);
		return;
	}else if(timecount > 0){
		timeElement.innerHTML = `0:0${timecount}`;
		timecount -= 1;
		setTimeout(function(){countdown()}, 1000);
		return;
	}else{
		timeElement.innerHTML = `0:0${timecount}`;
		console.log('Countdown ended.');
		endgame();
		return;
	}
}

//endgame function -- shows game is over. 
function endgame(){
	ongoingGame = false;

	//get rid of all moles
	clearMoles();

	//indicate game over
	titleElement = document.getElementById('title_cont');
	titleElement.innerHTML = 'Thanks for playing!'
	titleElement.style.background = '#e8df2c';

}

//makeMoles function -- create pseudorandom # of moles at pseudorandom intervals
function makeMoles(){
	if(ongoingGame){
		//decide how many moles to make this round - 1 to 3
		moleNum = Math.floor(Math.random() * 3) + 1;

		for(moleNum; moleNum > 0; moleNum--){
			//randomly generate a time btwn .5s and 3.5s
			const waitTime = Math.random() * 3500 + 500;
			//wait that long to make a mole
			setTimeout(function(){moleMaker()}, waitTime);
		}
		//wait 1 to 2s and start again
		const waitTime = Math.random() * 2000 + 1000;
		setTimeout(function(){makeMoles()}, waitTime);
	}else{
		return;
	}
}

//moleMaker function -- generates moles when called
function moleMaker(){
	if(ongoingGame){
		//pick a hole
		let holeNum = Math.floor(Math.random() * 9 + 1);
		
		//check if hole has a mole
		if(moleList.get(holeNum) == true){
			return;
		}
		
		//create mole
		let newMole = new Mole(holeNum);
		
		//add mole to moleList
		moleList.set(holeNum, newMole);

		//pseudorandomly generate a time (.5s to 3.5s)
		const hideTime = Math.random() * 3500 + 500;
		//wait that time, then hide mole if it still exists
		setTimeout(function(){
			if(moleList.get(holeNum) === newMole){
				newMole.hide();
			}
		}, hideTime);

	}
}

