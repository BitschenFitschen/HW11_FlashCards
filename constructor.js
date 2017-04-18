// function Human(eyes, nose, fingerAmount) {
// 	this.eye = eyes;
// 	this.nose - nose;
// 	this.fingerAmount = fingerAmount;
// }

// var bob = new Human("brown", true, 10);
// var jane = new Human("green", true, 9);

var fs = require('fs');
var prompt = require('prompt');

var questionData = [
	{
		question: 'was the first president of the US?',
		answer: 'George Washington'
	}
];


prompt.start();

prompt.get({
	properties: { 
		cardType: {
			description:'Basic or ClozeCard?'
		},
		showOrCreate: {
			description: 'Show or Create?'
		}
	}
}, function(err, result){
	if (result.cardType === "basic") {
		var index = questionData.length - 1;
		var basic = new BasicCard(questionData[0].question, questionData[0].answer);
		displayCard(basic);
	} else {
		//cloze logic here
		console.log('here')
	}
});

// Promise("data")
// 	.then(function(res) {
// 		return res * 2;
// 	})
// 	.then(function(res) {
// 		return res;
// 	})
// 	.map(function(res) {
// 		return res * 4
// 	})




function BasicCard(question, answer) {
	this.question = question;
	this.answer = answer;
}

BasicCard.prototype.printInfo = function() {
	console.log("Question:" + this.question + "\nAnswer:" + this.answer + "what what in the butt");
};


function ClozeCard(cloze, partial) {
	this.cloze = cloze;
	this.partial = "..." + partial;
	this.fulltext = cloze + " " + partial;
}

function displayCard(card) {
	prompt.get({
		properties: {
			answer: {
				description: card.question
			}
		}
	}, function(err, result) {
		console.log(result);
		if (result.answer === card.answer) {
			console.log('yay')
		} else {
			console.log('nope');
		}
	});
}

// var newClozeQuestion = new ClozeCard(questionData[0].answer, questionData[0].question);
// console.log(newClozeQuestion)
// console.log(newClozeQuestion.cloze, newClozeQuestion.partial, newClozeQuestion.fulltext);


