console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
- make an array of objects names players.
- assign 4 objects with a name, hand, and totalValue property.
- make a function that creates a card deck.
- hard code all suits and ranks.
- loop through both and assign values to an array named deck.
- make a function that shuffles the deck.
- use the math.random method to randomize the deck.
- deal two cards by using the pop method on the shuffled deck.
- assign the cards to the hand property in each object.
- make a function to add the cards value.
- if the first character of each index is an 'A' return the value as 11.
- if the first character of each index is a 'J', 'Q', 'K' return the value as 10.
- or else just parse the string number to an actual number.
- add both of the values together and assign it to the totalValue property.
- check each persons total value and whatever number is the highest assign
it to winner variable.
- if the players totalValue is equal to the winningNum then they are the winner.
- console.log the winning player.
*/

var players = [
  {
    name: 'Walter',
    hand: [],
    totalValue: null
  },
  {
    name: 'Jesse',
    hand: [],
    totalValue: null
  },
  {
    name: 'Gus',
    hand: [],
    totalValue: null
  },
  {
    name: 'Saul',
    hand: [],
    totalValue: null
  }
];

function createDeck() {
  var suits = ['C', 'D', 'H', 'S'];
  var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  var deck = [];

  for (var i = 0; i < suits.length; i++) {
    for (var x = 0; x < ranks.length; x++) {
      deck.push(ranks[x] + ' ' + suits[i]);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for (var i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomCard = Math.floor(Math.random() * 52);
    deck[i] = deck[randomCard];
    deck[randomCard] = tempCard;
  }
}

function dealCards() {
  for (var i = 0; i < players.length; i++) {
    var twoCards = deck.pop();
    players[i].hand.push(twoCards);
  }
}

var deck = createDeck();
shuffleDeck(deck);
dealCards(deck);

function addCards() {
  dealCards(deck);
  for (var i = 0; i < players.length; i++) {
    var cards = players[i].hand;
    for (var x = 0; x < cards.length; x++) {
      var cardIndex = cards[x].charAt(0);
      if (cardIndex === 'A') {
        cardIndex = 11;
      } else if (cardIndex === 'J' || cardIndex === 'Q' || cardIndex === 'K') {
        cardIndex = 10;
      } else {
        cardIndex = parseInt(cardIndex);
      }
      players[i].totalValue += cardIndex;
    }
  }
}

function getWinner() {
  addCards();
  var totals = [];
  var winningNum = 0;
  for (var i = 0; i < players.length; i++) {
    console.log(players[i].name + ': ' + players[i].hand[0] + ' | ' + players[i].hand[1]);
    totals.push(players[i].totalValue);
    totals.forEach(element => {
      if (winningNum < element) {
        winningNum = element;
      }
    });
    if (players[i].totalValue === winningNum) {
      var winner = players[i];
    }
  }
  console.log('Winner is:', winner.name + ' with a score of ' + winner.totalValue);
}

getWinner();
