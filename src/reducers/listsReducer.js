const initialState = [
  {
    title: 'ToDo',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'invent an idea'
      },
      {
        id: 1,
        text: 'write it down'
      }
    ]
  },

  {
    title: 'In progress',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'inventing an idea'
      },
      {
        id: 1,
        text: 'writing down'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default listsReducer;