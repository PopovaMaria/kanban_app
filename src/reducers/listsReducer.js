import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 5;

const initialState = [
  {
    title: 'ToDo',
    id: 'list-${0}',
    cards: [
      {
        id: 'card-${0}',
        text: 'invent an idea'
      },
      {
        id: 'card-${1}',
        text: 'write it down'
      }
    ]
  },

  {
    title: 'In progress',
    id: 'list-${1}',
    cards: [
      {
        id: 'card-${2}',
        text: 'inventing an idea'
      },
      {
        id: 'card-${3}',
        text: 'writing down'
      },
      {
        id: 'card-${4}',
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
        id: 'list-${listId}'
      }
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: 'card-${cardId}'
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