import React from "react";
import MyCard from "./MyCard";
import ActionButton from "./ActionButton";

const MyList = ({title, cards, listId }) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
      { cards.map(card => (
        <MyCard key={card.id} text={card.text}/>
        ))}
        <ActionButton listId={listId}/>
    </div>
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