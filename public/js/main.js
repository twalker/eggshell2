
import React from 'react'
import pkg from '../../package.json'

import App from './components/app.jsx'


var eggs = [
  {name: 'blue', cracked:false},
  {name: 'red', cracked:true},
]

React.render(
  <App name={pkg.name} eggs={eggs} />,
  document.getElementById('spa')
)
