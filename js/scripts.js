document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const cardArray = [
      {
        name: "fries",
        img: "🍟"
      },
      {
        name: "fries",
        img: "🍟"
      },
      {
        name: "cheeseburger",
        img: "🍔"
      }
      ,
      {
        name: "cheeseburger",
        img: "🍔"
      },
      {
        name: "hotdog",
        img: "🌭"
      },
      {
        name: "hotdog",
        img: "🌭"
      },
      {
        name: "icecream",
        img: "🍦"
      },
      {
        name: "icecream",
        img: "🍦"
      },
      {
        name: "pizza",
        img: "🍕"
      },
      {
        name: "pizza",
        img: "🍕"
      },
      {
        name: "cake",
        img: "🍰"
      },
      {
        name: "cake",
        img: "🍰"
      }
    ]

    const grid = document.querySelector(".grid")

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('div')

        card.setAttribute('data-id', i)
        card.innerHTML = cardArray[i].img
        // card.addEventListener('click', flipcard)

        grid.appendChild(card)
      }
    }

    createBoard()
});
