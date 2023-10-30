import React from "react";

class NotesInput extends React.Component {
  state = {
    title: "",
    body: "",
    maxChar: 50,
  };

  onTitleChangeEventHandler = (event) => {
    this.setState({
      title: event.target.value.slice(0, this.state.maxChar),
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);

    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body, maxChar } = this.state;

    return (
      <div className="note-input">
        <h2>Create Note</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Remaining: {maxChar - title.length}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          <textarea
            className="note-input__body"
            type="text"
            placeholder="Add text here"
            value={body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
