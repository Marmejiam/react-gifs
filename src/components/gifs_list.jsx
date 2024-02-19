import React, { Component } from 'react';
import Gif from "./gif";


class GifsList extends Component {

handleClic = (gifId) => {
  this.props.selectedIdFunction(gifId);
}

renderList = () => {
  return this.props.gifs.map(gif => {
    return <Gif id={gif.id} key={gif.id} onClick={this.handleClic} />
  })
}
  render() {
    return(
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}

export default GifsList;
