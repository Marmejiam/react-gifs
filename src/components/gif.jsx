import React, { Component } from 'react';


class Gif extends Component {
handleClic = () => {
  if (this.props.onClick) {
    this.props.onClick(this.props.id)
  }
}
  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://i.giphy.com/${this.props.id}.gif`
    return(
      <img src={src} alt="" className='gif' onClick={this.handleClic} />
    )
  }
}

export default Gif;
