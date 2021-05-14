import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 5;

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
        id: 2,
        text: 'inventing an idea'
      },
      {
        id: 3,
        text: 'writing down'
      },
      {
        id: 4,
        text: 'writing down'
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listId
      }
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardId
      }
      cardId += 1;
      const newState = state.map(list => {
        if(list.id === action.payload.listId)  {
          return {
            ...list,
            cards: [...list.cards, newCard]
          }
        } else {
          return list
        }
      });

      return newState;

    default:
      return state;
  }
}

export default listsReducer;