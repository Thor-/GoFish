var deck, suit, rank, count, playerHand, npcHand, player, guess, init, cards, record;
function Game() {
	this.cards = [];
	this.playerHand = [];
	this.npcHand = [];
	this.suit = suit;
	this.rank = rank;
	this.record = [];
	this.count = function() {
		return this.cards.length;
	}
	this.init = function() {
		for (s = 1; s <= 4; s++) {
			for (r = 1; r <= 13; r++) {
				this.cards.push(new Card(r, s));
			}
		}
		return this.cards;
	}
	this.shuffle = function() {
		i = this.cards.length;
		while (--i) {
			j = Math.floor(Math.random() * (i + 1));
			tempi = this.cards[i];
			tempj = this.cards[j];
			this.cards[i] = tempj;
			this.cards[j] = tempi;
		}
		console.log("Deck when shuffled is:");
		console.log(this.cards);
		return this.cards;
	}
	this.dealNPC = function() {
		for (i = 0; i < 7; i++) {
			this.npcHand.push(this.cards.pop());
		}
		console.log("Computer's hand is:");
		console.log(this.npcHand);
		return this.npcHand;
	}
	this.dealPlayer = function() {
		for (i = 0; i < 7; i++) {
			this.playerHand.push(this.cards.pop());
		}
		console.log("Your hand is:");
		console.log(this.playerHand);
		return this.playerHand;
	}
	this.goFish = function() {
		while (this.cards.length > 0 && this.npcHand.length > 0 && this.playerHand.length > 0) {
			count = 0;
			temp = [];
			correctGuesses = 0;
			this.guess = prompt("Computer, do you have any ___ ? (Enter Rank of Card)");
			this.record.push(this.guess);
			for (i = (this.npcHand.length - 1); i >= 0; i--) {
				if (this.npcHand[i].rank != this.guess) {
					temp.push(this.npcHand[i]);
					count++;
				}
				else {
					correctGuesses++;
				}
			}
			if (count == 7) {
				console.log("Sorry, Go Fish!");
				this.playerHand.push(this.cards.pop());
			} else {
				console.log("You guessed correctly! The Computer had " + correctGuesses + " " + this.guess);
				this.npcHand = temp;
			}
		}
		if (this.cards.length == 0) {
			console.log("Oops, you lose!");
		}
		if (this.npcHand.length == 0) {
			console.log("You guessed all the cards in the Computer's hand. Congrats, you win!");
		}
		console.log("Here is a record of your guesses:");
		console.log(this.record);
	}
}

function Card(rank, suit) {
	this.rank = rank;
	this.suit = suit;
	console.log(this.rank + " of " + this.suit);
	this.show = function() {
		console.log(this.rank + " of " + this.suit);
	}
}

g = new Game();
g.init();
g.shuffle();
g.dealNPC();
g.dealPlayer();
g.goFish();