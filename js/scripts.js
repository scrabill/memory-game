document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const cardArray = [
      {
        name: "fries",
        img: "img/fries.png",
        emoji: "🍟"
      },
      {
        name: "fries",
        img: "img/fries.png",
        emoji: "🍟"
      },
      {
        name: "cheeseburger",
        img: "img/burger.png",
        emoji: "🍔"
      }
      ,
      {
        name: "cheeseburger",
        img: "img/burger.png",
        emoji: "🍔"
      },
      {
        name: "hotdog",
        img: "img/hotdog.png",
        emoji: "🌭"
      },
      {
        name: "hotdog",
        img: "img/hotdog.png",
        emoji: "🌭"
      },
      {
        name: "icecream",
        img: "img/icecream.png",
        emoji: "🍦"
      },
      {
        name: "icecream",
        img: "img/icecream.png",
        emoji: "🍦"
      },
      {
        name: "pizza",
        img: "img/pizza.png",
        emoji: "🍕"
      },
      {
        name: "pizza",
        img: "img/pizza.png",
        emoji: "🍕"
      },
      {
        name: "cake",
        img: "img/cake.png",
        emoji: "🍰"
      },
      {
        name: "cake",
        img: "img/cake.png",
        emoji: "🍰"
      }
    ]

    // Randomise the card position with each gameplay

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const result = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenID = []
    let cardsWon = []

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')

        // Use this when using images for the cards
        card.setAttribute('src', 'img/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)

        // Use this when using an emoji instead of an image
        // let card = document.createElement('div')
        // card.setAttribute('data-id', i)
        // card.innerHTML = cardArray[i].emoji
        // card.addEventListener('click', flipcard)

        grid.appendChild(card)
      }
    }

    createBoard()

    // Check for checkForMatch

    function checkForMatch() {
      let cards = document.querySelectorAll('img')
      const optionOneID = cardsChosenID[0]
      const optionTwoID = cardsChosenID[1]

      // Can I use the variable names here?
      if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match!")
        cards[optionOneID].setAttribute('src', 'img/blank.png')
        cards[optionTwoID].setAttribute('src', 'img/blank.png')
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneID].setAttribute('src', 'img/back.png')
        cards[optionTwoID].setAttribute('src', 'img/back.png')
        alert("Sorry. That's not a match")
      }

      cardsChosen = []
      cardsChosenID = []

      result.textContent = cardsWon.length

      if (cardsWon.length === cardArray.length / 2) {
        result.textContent = 'Congrats! You found then all!'
      }
    }

    // Flip card

    function flipcard() {
      let cardID = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardID].name)
      cardsChosenID.push(cardID)
      this.setAttribute('src', cardArray[cardID].img)

      // When two cards have been chosen, wait, then see if they match
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }

    }

});
