import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import TextareaAutosize from 'react-textarea-autosize';
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
import { connect} from "react-redux";
import { addList, addCard } from "../actions";

class ActionButton extends Component {

  state = {
    formOpen: false,
    text: ""
  }
  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = e => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      })
      dispatch(addCard(listId, text));
    }
    return;
  }

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ""
      })
      dispatch(addList(text));
    }
    return;
  }

  renderAddButton = () => {
    const { list } = this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground}}
      >
        <AddIcon/>
        <p>{ buttonText }</p>
      </div>
    )
  }

  renderForm = () => {

    const { list } = this.props;
    const placeholder = list ? "Enter list title..." : "Enter a title for this card...";
    const buttonTitle = list ? "Add list" : "Add card"

    return <div>
      <Card
        style={{
          minHeight: 60,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}>
        <TextareaAutosize
          placeholder={placeholder}
          autoFocus
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
          style={{
            resize: "none",
            width: "100%",
            outline: "none",
            border: "none",
            overflow: "hidden"
          }}
        />
      </Card>
      <div style={styles.formButtonGroup}>
        <Button
          onMouseDown={ list ? this.handleAddList : this.handleAddCard}
          variant="contained"
          style={{color: "white", backgroundColor: "#5aac44"}}>
          {buttonTitle}{" "}
        </Button>
        <ClearIcon style={{ marginLeft: 8, cursor: "pointer"}}/>
      </div>
    </div>
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
}

export default connect()(ActionButton);