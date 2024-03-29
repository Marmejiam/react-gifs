import React, { Component } from 'react';
import Giphy from "giphy-api";
import SearchBar from "./search_bar";
import Gif from "./gif";
import GifsList from "./gifs_list";

const GIPHY_API_KEY = 'edadcukarvoW4DXeg5lMxyl4p7ZSq4ry';

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
//NUEVA VERSION
  search = (query) => {
    const giphy = Giphy(GIPHY_API_KEY);
    giphy.search({
      q: query,
      rating: 'g',
      limit: 10
    }).then((response) => {
      this.setState({
        gifs: response.data
      });
    }).catch(error => {
      console.error('Error fetching from Giphy API', error);
    });
  }

// MI VERSION
  // search = (query) => {
  // Giphy("edadcukarvoW4DXeg5lMxyl4p7ZSq4ry").search({
  //    q: query,
  //   rating: 'g',
  //   limit: 10,
  //   }, (err, res) => {
  //     this.setState({
  //       gifs: res.data
  //     });
  // });
  // }

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
