import React, { Component } from 'react';
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifsList from "./gifs_list";
import Giphy from "giphy-api";


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null,
    }
    this.search("hola");

  }

  selectedId = (gifId) => {
    this.setState({
      selectedGifId: gifId
    });
  }

  search = (query) => {
  Giphy("edadcukarvoW4DXeg5lMxyl4p7ZSq4ry").search({
     q: query,
    rating: 'g',
    limit: 10,
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
  });
  }
  render() {
    const gifs = [
      { id: "IrQcyTog3X8VW" },
      { id: "2TuTnLPFeUeHvtTDZ7" },
      { id: "LzwcNOrbA3aYvXK6r7" },
      { id: "YdGUYXws5mD2fxFKxg" },
    ];
    return(
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifsList gifs={this.state.gifs} selectedIdFunction={this.selectedId} />
        </div>
      </div>
    );
  }
}

export default App;
