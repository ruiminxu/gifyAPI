import React, { Component } from "react";
import GifCard from "./GifCard";

export default class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      isClicked: false,
    };
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventdefault();
  };

  handleSearchInput = () => {
    // console.log(this.state.searchTerm)
    this.props.searchInput(this.state.searchTerm);
  };

  render() {
    return (
      <div className="searchBoxContainer searchBox">
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="look up a gif"
            name="searchTerm"
            onChange={this.handleSearch}
          ></input>
        </form>
        <button onClick={this.handleSearchInput}>Search</button>
        {this.props.gif.map((gif) => {
          return <GifCard name={gif.id} source={gif.images.original.url} />;
        })}
      </div>
    );
  }
}
