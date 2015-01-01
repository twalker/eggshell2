
export var name = "Eggshell2"
import React from 'react'

var Hello = React.createClass({
  render: function() {
    return <h1>Hello, {this.props.name}!</h1>
  }
})

React.render(
  <Hello name="Eggshell2" />,
  document.getElementById('react')
)
