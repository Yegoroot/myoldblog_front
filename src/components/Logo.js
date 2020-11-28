import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'

import TextTransition, { presets } from 'react-text-transition'

const TEXTS = [
  'Code',
  'JS',
  'Style',
  'Cs',
  'Work'
]

const useStyles = makeStyles((theme) => ({

  logo: {
    display: 'flex',
    color: theme.palette.text.primary,
    fontSize: '1.4rem',
    textDecoration: 'none'
  },
  logoTitle: {
    marginRight: 7
  }
}))

const Logo = () => {
  const classes = useStyles()
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1),
      4000 // every 3 seconds
    )

    return clearInterval(intervalId)
  })
  return (

    <RouterLink
      to="/"
      className={classes.logo}

    >
      <span className={classes.logoTitle}>I Keep My</span>
      <TextTransition
        text={TEXTS[index % TEXTS.length]}
        springConfig={presets.wobbly}
      />
    </RouterLink>
  )
}

export default Logo
