import React from "react";

class Search extends React.Component {
  state = { query: "" };

  onQueryChangeEventHandler = (event) => {
    const query = event.target.value;
    this.setState({ query }, () => {
      this.props.searchNote({ query });
    });
  };

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="find notes"
          value={this.state.query}
          onChange={this.onQueryChangeEventHandler}
        />
      </div>
    );
  }
}

export default Search;
