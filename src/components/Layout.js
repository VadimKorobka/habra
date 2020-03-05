import React from 'react'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/styles/makeStyles'
import theme from '../config/theme'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { MIN_WIDTH as minWidth } from '../config/constants'
import isMobile from 'is-mobile'

const chromeAddressBarHeight = 56
const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex', 
    height: `calc(100vh - 48px - ${isMobile() ? chromeAddressBarHeight : 0}px)`,
    borderRadius: 0,
  },
  hidden: {
    display: 'none'
  }
}))

const Layout = () => {
  const classes = useStyles()
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div style={{ maxWidth: minWidth, margin: '48px auto 0 auto' }}>
          <Paper className={classes.app}>
            <App />
          </Paper>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default Layout
