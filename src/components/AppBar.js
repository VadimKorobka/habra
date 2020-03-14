import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import { MIN_WIDTH as maxWidth } from '../config/constants'
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    height: 48,
    position: 'relative',
    flexGrow: 1,
  },
  container: { maxWidth, padding: 0 },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 800,
  }
}))

const Component = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <AppBar className={classes.root} elevation={0}>
      <Container className={classes.container}>
        <Toolbar style={{ minHeight: 'unset', height: 48 }}>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/page/1" className={classes.link}>
              habra.
            </Link>
          </Typography>
          <IconButton onClick={() => history.push('/search')}>
            <SearchRoundedIcon />
          </IconButton>
          <IconButton onClick={() => history.push('/settings')}>
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton>
            <PermIdentityRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Divider />
    </AppBar>
  )
}

export default Component
