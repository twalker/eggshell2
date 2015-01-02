import React from 'react'
import EggList from './egg-list.jsx'


export default React.createClass({
  render: function() {
    return (
      <section>
        <h1>Hello, {this.props.name}!</h1>
        <EggList eggs={this.props.eggs} />
      </section>
    )
  }
})
