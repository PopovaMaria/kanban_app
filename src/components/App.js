import React, { Component } from "react";
import MyList from "./MyList";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {

  onDragEnd = () => {
    //TODO: reordering logic
  }

  render () {
    const { lists } = this.props;
    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div>
      <h2>Kanban App</h2>
      <div style={styles.listsContainer}>
      { lists.map(list => <MyList key={list.id} listId={list.id} title={list.title} cards={list.cards}/>)}
      <ActionButton list/>
      </div>
    </div>
    </DragDropContext>
    )
  }
}

const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);