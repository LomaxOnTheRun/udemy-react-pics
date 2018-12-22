import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = term => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term
        },
        headers: {
          Authorization:
            "Client-ID bc2a7c24c3eabacbe6554246829d90be1b6b3e11cf271559f643a53f626e602e"
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
