import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getInitialData } from "./utils/index";

class NotesApp extends React.Component {
  state = {
    notes: getInitialData(),
    querySearch: '',
  };

  onAddNoteEventHandler = ({ title, body }) => {
    this.setState((prevState) => ({
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          createdAt: new Date().toISOString(),
          archived: false,
        },
      ],
    }));
  };

  onDeleteHandler = (id) => {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  };

  onArchiveHandler = (id) => {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    });
  };

  onUnarchiveHandler = (id) => {
    this.setState({
      notes: this.state.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      ),
    });
  };

  onSearchEventHandler = ({ query }) => {
    this.setState({ querySearch: query });
  };

  render() {
    return (
      <>
        <Header searchNote={this.onSearchEventHandler} />
        <Body
          addNote={this.onAddNoteEventHandler}
          notes={this.state.notes}
          querySearch={this.state.querySearch}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          onUnarchive={this.onUnarchiveHandler}
        />
        <Footer />
      </>
    );
  }
}


export default NotesApp;
