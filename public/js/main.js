
import React from 'react'
import pkg from '../../package.json'

import App from './components/app.jsx'

React.render(
  <App name={pkg.name} />,
  document.getElementById('spa')
)
