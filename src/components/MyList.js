import React from "react";
import MyCard from "./MyCard";

const MyList = ({title}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
      <MyCard/>
    </div>
  )
}

export default MyList;

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 300,
    padding: 8
  }
}