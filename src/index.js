import React from 'react'
import ReactDOM from 'react-dom'
import 'promise-polyfill/src/polyfill'
import theme from './theme'
// import CssBaseline from '@material-ui/core/CssBaseline'
import {ThemeProvider} from '@material-ui/core/styles'

import App from './components/App'
import './global.scss'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      {/*<CssBaseline/>*/}
      <App/>
    </ThemeProvider>
  </React.StrictMode>, document.getElementById('root'))
