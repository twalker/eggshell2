import React from 'react'

export default React.createClass({
  handleClick: e => {
    e.preventDefault();
    console.log('click')
  },

  render: function() {
    return (
      <a className={this.props.cracked ? 'cracked': ''} onClick={this.handleClick}>
        {this.props.name}
      </a>
    )
  }
})
