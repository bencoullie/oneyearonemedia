const fakeUsers = [
  {
    id: 123,
    name: "Benc",
    media: [
      { id: 1, name: "Hamlet", giver: "Nicko", done: false },
      { id: 2, name: "Berzerk", giver: "Chan Lean", done: true },
      { id: 3, name: "The Office", giver: "Mazin", done: false },
    ],
  },
  {
    id: 456,
    name: "Nicko",
    media: [
      { id: 4, name: "One Piece", giver: "Benc", done: false },
      { id: 5, name: "Stardew Valley", giver: "Chan Lean", done: false },
      { id: 6, name: "Honey and Clover", giver: "Mazin", done: false },
    ],
  },
]

module.exports.fakeUsers = fakeUsers
