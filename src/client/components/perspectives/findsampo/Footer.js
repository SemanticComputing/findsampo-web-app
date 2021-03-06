import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import aaltoLogo from '../../../img/findsampo/logo_aalto-compressor.png'
import hyLogo from '../../../img/findsampo/logo_helsinki-compressor.png'
import heldigLogo from '../../../img/findsampo/logo_heldig-compressor.png'
import fhaLogo from '../../../img/findsampo/logo_fha-compressor.png'

const styles = theme => ({
  root: {
    height: 64,
    // marginTop: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    // position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    // bottom: 0,
    // left: 0,
    boxShadow: '0 -20px 20px -20px #333',
    width: '100%',
    borderRadius: 0
  },
  layout: {
    width: 'auto',
    // height: 115,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1500 + theme.spacing(6))]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 40
  },
  aaltoLogo: {
    height: 34
  },
  hyLogo: {
    height: 45
  },
  heldigLogo: {
    height: 33
  }
})

const Footer = props => {
  const { classes } = props
  return (
    <Paper className={classes.root}>
      <Grid container className={classes.layout}>
        <Grid container spacing={3} item xs={12}>
          <Grid item xs className={classes.logoContainer}>
            <a href='https://www.aalto.fi/en/school-of-science' target='_blank' rel='noopener noreferrer'>
              <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <a href='https://www.helsinki.fi/en' target='_blank' rel='noopener noreferrer'>
              <img className={classes.hyLogo} src={hyLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <a href='https://www.helsinki.fi/en/helsinki-centre-for-digital-humanities' target='_blank' rel='noopener noreferrer'>
              <img className={classes.heldigLogo} src={heldigLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.logoContainer}>
            <a href='https://www.museovirasto.fi/en' target='_blank' rel='noopener noreferrer'>
              <img className={classes.logo} src={fhaLogo} alt='logo' />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
