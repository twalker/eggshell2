import React from 'react'
import Egg from './egg.jsx'

export default React.createClass({
  render: function() {
    var eggNodes = this.props.eggs.map(function(egg){
      return (
        <li className={egg.cracked ? 'cracked': ''}><Egg name={egg.name} cracked={egg.cracked}/></li>
      );
    })
    return (
      <ul className="egglist">
        {eggNodes}
      </ul>
    )
  }
})
