function playChords(progression, number) {
	var chord = progression[number];
	var audio;
	if (chord === "A") {
		audio = new Audio('chords/A.mp3');
	} else if (chord === "Am") {
		audio = new Audio('chords/Am.mp3');
	} else if (chord === "B") {
		audio = new Audio('chords/B.mp3');
	} else if (chord === "Bm") {
		audio = new Audio('chords/Bm.mp3');
	} else if (chord === "C") {
		audio = new Audio('chords/C.mp3');
	} else if (chord === "Cm") {
		audio = new Audio('chords/Cm.mp3');
	} else if (chord === "D") {
		audio = new Audio('chords/D.mp3');
	} else if (chord === "Dm") {
		audio = new Audio('chords/Dm.mp3');
	} else if (chord === "E") {
		audio = new Audio('chords/E.mp3');
	} else if (chord === "Em") {
		audio = new Audio('chords/Em.mp3');
	} else if (chord === "F") {
		audio = new Audio('chords/F.mp3');
	} else if (chord === "Fm") {
		audio = new Audio('chords/Fm.mp3');
	} else if (chord === "G") {
		audio = new Audio('chords/G.mp3');
	} else if (chord === "Gm") {
		audio = new Audio('chords/Gm.mp3');
	} else if (chord === "A&#9839") {
		audio = new Audio('chords/As.mp3');
	} else if (chord === "A&#9839m") {
		audio = new Audio('chords/Asm.mp3');
	} else if (chord === "C&#9839") {
		audio = new Audio('chords/Cs.mp3');
	} else if (chord === "C&#9839m") {
		audio = new Audio('chords/Csm.mp3');
	} else if (chord === "D&#9839") {
		audio = new Audio('chords/Ds.mp3');
	} else if (chord === "D&#9839m") {
		audio = new Audio('chords/Dsm.mp3');
	} else if (chord === "F&#9839") {
		audio = new Audio('chords/Fs.mp3');
	} else if (chord === "F&#9839m") {
		audio = new Audio('chords/Fsm.mp3');
	} else if (chord === "G&#9839") {
		audio = new Audio('chords/Gs.mp3');
	} else if (chord === "G&#9839m") {
		audio = new Audio('chords/Gsm.mp3');
	} else if (chord === "A&#9837") {
		audio = new Audio('chords/Gs.mp3');
	} else if (chord === "A&#9837m") {
		audio = new Audio('chords/Gsm.mp3');
	} else if (chord === "B&#9837") {
		audio = new Audio('chords/As.mp3');
	} else if (chord === "B&#9837m") {
		audio = new Audio('chords/Asm.mp3');
	} else if (chord === "D&#9837") {
		audio = new Audio('chords/Cs.mp3');
	} else if (chord === "D&#9837m") {
		audio = new Audio('chords/Csm.mp3');
	} else if (chord === "E&#9837") {
		audio = new Audio('chords/Ds.mp3');
	} else if (chord === "E&#9837m") {
		audio = new Audio('chords/Dsm.mp3');
	} else if (chord === "G&#9837") {
		audio = new Audio('chords/Fs.mp3');
	} else if (chord === "G&#9837m") {
		audio = new Audio('chords/Fsm.mp3');
	}
	/*
	switch(chord){
		case "A":
			audio = new Audio('chords/A.mp3');
			break;
		case "Am":
			audio = new Audio('chords/Am.mp3');
			break;
		case "B":
			audio = new Audio('chords/B.mp3');
			break;
		case "Bm":
			audio = new Audio('chords/Bm.mp3');
			break;
		case "C":
			audio = new Audio('chords/C.mp3');
			break;
		case "Cm":
			audio = new Audio('chords/Cm.mp3');
			break;
		case "D":
			audio = new Audio('chords/D.mp3');
			break;
		case "Dm":
			audio = new Audio('chords/Dm.mp3');
			break;
		case "E":
			audio = new Audio('chords/E.mp3');
			break;
		case "Em":
			audio = new Audio('chords/Em.mp3');
			break;
		case "F":
			audio = new Audio('chords/F.mp3');
			break;
		case "Fm":
			audio = new Audio('chords/Fm.mp3');
			break;
		case "G":
			audio = new Audio('chords/G.mp3');
			break;
		case "Gm":
			audio = new Audio('chords/Gm.mp3');
			break;
		case "A&#9839":
			audio = new Audio('chords/As.mp3');
			break;
		case "A&#9839m":
			audio = new Audio('chords/Asm.mp3');
			break;
		case "C&#9839":
			audio = new Audio('chords/Cs.mp3');
			break;
		case "C&#9839m":
			audio = new Audio('chords/Csm.mp3');
			break;
		case "D&#9839":
			audio = new Audio('chords/Ds.mp3');
			break;
		case "D&#9839m":
			audio = new Audio('chords/Dsm.mp3');
			break;
		case "F&#9839":
			audio = new Audio('chords/Fs.mp3');
			break;
		case "F&#9839m":
			audio = new Audio('chords/Fsm.mp3');
			break;
		case "G&#9839":
			audio = new Audio('chords/Gs.mp3');
			break;
		case "G&#9839m":
			audio = new Audio('chords/Gsm.mp3');
			break;
		case "A&#9837":
			audio = new Audio('chords/Gs.mp3');
			break;
		case "A&#9837m":
			audio = new Audio('chords/Gsm.mp3');
			break;
		case "B&#9837":
			audio = new Audio('chords/As.mp3');
			break;
		case "B&#9837m":
			audio = new Audio('chords/Asm.mp3');
			break;
		case "D&#9837":
			audio = new Audio('chords/Cs.mp3');
			break;
		case "D&#9837m":
			audio = new Audio('chords/Csm.mp3');
			break;
		case "E&#9837":
			audio = new Audio('chords/Ds.mp3');
			break;
		case "E&#9837m":
			audio = new Audio('chords/Dsm.mp3');
			break;
		case "G&#9837":
			audio = new Audio('chords/Fs.mp3');
			break;
		case "G&#9837m":
			audio = new Audio('chords/Fsm.mp3');
			break;
	}
	*/
	audio.play();
}

function generateChords(switch_id, number_id, select_id, major_minor_id, major_id, minor_id) {
	var chords;
	var i;
	if (document.getElementById(switch_id).checked) {
		if (document.getElementById(select_id).value === major_minor_id) {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9839", "C&#9839", "D&#9839", "F&#9839", "G&#9839", "Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9839m", "C&#9839m", "D&#9839m", "F&#9839m", "G&#9839m"];
		} else if (document.getElementById(select_id).value === major_id) {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9839", "C&#9839", "D&#9839", "F&#9839", "G&#9839"];
		} else if (document.getElementById(select_id).value === minor_id) {
			chords = ["Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9839m", "C&#9839m", "D&#9839m", "F&#9839m", "G&#9839m"];
		} else {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9839", "C&#9839", "D&#9839", "F&#9839", "G&#9839", "Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9839m", "C&#9839m", "D&#9839m", "F&#9839m", "G&#9839m"];
		}
	} else {
		if (document.getElementById(select_id).value === major_minor_id) {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9837", "B&#9837", "D&#9837", "E&#9837", "G&#9837", "Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9837m", "B&#9837m", "D&#9837m", "E&#9837m", "G&#9837m"];
		} else if (document.getElementById(select_id).value === major_id) {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9837", "B&#9837", "D&#9837", "E&#9837", "G&#9837"];
		} else if (document.getElementById(select_id).value === minor_id) {
			chords = ["Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9837m", "B&#9837m", "D&#9837m", "E&#9837m", "G&#9837m"];
		} else {
			chords = ["A", "B", "C", "D", "E", "F", "G", "A&#9837", "B&#9837", "D&#9837", "E&#9837", "G&#9837", "Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm", "A&#9837m", "B&#9837m", "D&#9837m", "E&#9837m", "G&#9837m"];
		}
	}
	var progression = [];
	for (i = 0; i < document.getElementById(number_id).value; i++) {
		progression.push(chords[Math.floor(Math.random() * chords.length)]);
	}
	//return progression;
	//document.getElementById(print).innerHTML = progression;
	console.log(progression);
}

function timeChords() {
	var a;
	for (a = 0; a < document.getElementById(number_id).value; a++) {
		playChords(progression, a);
	}
}

function printChords(one, two, three, four, five, six){
	var progression = generateChords(one, two, three, four, five, six);
	document.getElementById(print).innerHTML = progression.join(" ");
}

/*
Explanation of parameters:
*id = the id of the html element whose innerHTML will be changed
*func = the name of the function that will return the text
*p1, p2, p3... = parameters for the function used in previous "func" parameter

function printFunction(id, func, p1, p2, p3, p4, p5, p6) {
	document.getElementById(id).innerHTML = func(p1, p2, p3, p4, p5, p6);
}
*/
function fuckOff() {
	console.log("fuck off");
}