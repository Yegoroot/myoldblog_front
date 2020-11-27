import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {
  Box,
  Container,
  // Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'
// import { Link as RouterLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 80,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '65%',
      height: 'auto',
      transform: 'translateX(25%) rotateY(25deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },

  buttons: {
    marginBottom: theme.spacing(5),
    '&  a': {
      marginBottom: theme.spacing(1)
    }
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  },
  blockTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
  // https://www.materialui.co/colors
  /**
   * Light 400
   * need Light 800
   */

}))

const Hero = ({ className, ...rest }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={12}
            md={5}
            className={classes.blockTitle}
          >
            {/* <div> */}
            <Typography
              variant="h1"
              color="textPrimary"
            >
              {`${t('homepage.h1')}`}
            </Typography>
            <Box mt={3}>
              <Typography
                variant="body1"
                color="textSecondary"
              >
                {t('homepage.description')}
              </Typography>
            </Box>
            {/* </div> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
          >
            <Box position="relative">
              <div className={classes.shape}>
                <img
                  alt="Shapes"
                  src="/static/home/shapes.svg"
                />
              </div>
              <div className={classes.image}>
                <img
                  alt="Presentation"
                  src="/static/images/home.png"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  className: PropTypes.string
}

export default Hero
