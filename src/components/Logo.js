import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({

  logo: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '1.4rem',
    textDecoration: 'none'
  }
}))

const Logo = () => {
  const classes = useStyles()
  return (

    <RouterLink
      to="/"
      className={classes.logo}

    >
      I Keep My Code
      {/* <img
        alt="Logo"
        src={`/static/images/logo/dua/${settings.theme}.png`}
        {...props}
      /> */}
    </RouterLink>
  )
}

export default Logo
