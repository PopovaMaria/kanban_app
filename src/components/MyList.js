import React from "react";
import MyCard from "./MyCard";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";

const MyList = ({title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <MyCard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}
          {provided.placeholder}
          <ActionButton listId={listId}/>

        </div>
      )}

    </Droppable>
  )
}

export default MyList;

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 8,
    height: "100%"
  }
}