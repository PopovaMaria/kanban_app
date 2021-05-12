import React, { Component } from "react";
import MyList from "./MyList";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

class App extends Component {
  render () {

    const { lists } = this.props;
    console.log(lists)

    return (
    <div className="App">
      <h2>Hello</h2>
      <div style={styles.listsContainer}>
      { lists.map(list => <MyList key={list.id} title={list.title} cards={list.cards}/>)}
      <ActionButton list/>
      </div>
    </div>
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