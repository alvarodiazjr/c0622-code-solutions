console.log('Lodash is loaded:', typeof _ !== 'undefined');

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
      // deck.push(ranks[x] + '-' + suits[i]);
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
dealCards(deck);
console.log(players);

// all players now get randomly assigned two cards each.
// need to give values to the cards and add them together.

function addCards() {
  for (var i = 0; i < players.length; i++) {
    var cards = players[i].hand;
    console.log(cards);
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
      console.log(cardIndex);
    }
  }
}

addCards();
// players[i].totalValue = cardIndex;
