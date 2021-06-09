import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import aaltoLogo from '../../../img/findsampo/logo_aalto-compressor.png'
import hyLogo from '../../../img/findsampo/logo_helsinki-compressor.png'
import heldigLogo from '../../../img/findsampo/logo_heldig-compressor.png'
import fhaLogo from '../../../img/findsampo/logo_fha-compressor.png'

const useStyles = makeStyles(theme => ({
  root: props => ({
    boxShadow: '0 -20px 20px -20px #333 inset',
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up(props.layoutConfig.hundredPercentHeightBreakPoint)]: {
      minHeight: props.layoutConfig.footer.height
      // height: 115, for two row footer
    }
  }),
  gridContainer: {
    marginTop: 0,
    marginBottom: 0
  },
  layout: props => ({
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1500 + theme.spacing(6))]: {
      width: 1500,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }),
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '6px !important',
    paddingBottom: '6px !important',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '12px !important',
      paddingBottom: '12px !important'
    }
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
}))

const Footer = props => {
  const classes = useStyles(props)
  return (
    <Paper className={classes.root}>
      <div className={classes.layout}>
        <Grid className={classes.gridContainer} container spacing={3}>
          <Grid item xs className={classes.gridItem}>
            <a href='https://www.aalto.fi/en/school-of-science' target='_blank' rel='noopener noreferrer'>
              <img className={classes.aaltoLogo} src={aaltoLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.gridItem}>
            <a href='https://www.helsinki.fi/en' target='_blank' rel='noopener noreferrer'>
              <img className={classes.hyLogo} src={hyLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.gridItem}>
            <a href='https://www.helsinki.fi/en/helsinki-centre-for-digital-humanities' target='_blank' rel='noopener noreferrer'>
              <img className={classes.heldigLogo} src={heldigLogo} alt='logo' />
            </a>
          </Grid>
          <Grid item xs className={classes.gridItem}>
            <a href='https://www.museovirasto.fi/en' target='_blank' rel='noopener noreferrer'>
              <img className={classes.logo} src={fhaLogo} alt='logo' />
            </a>
          </Grid>
        </Grid>
      </div>
    </Paper>
  )
}

Footer.propTypes = {
  layoutConfig: PropTypes.object.isRequired
}

export default Footer
