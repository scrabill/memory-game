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

    const grid = document.querySelector(".grid")

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')

        // Use this when using images for the cards
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id', i)

        // Use this when using an emoji instead of an image
        // let card = document.createElement('div')
        // card.setAttribute('data-id', i)
        // card.innerHTML = cardArray[i].emoji
        // card.addEventListener('click', flipcard)

        grid.appendChild(card)
      }
    }

    createBoard()
});
