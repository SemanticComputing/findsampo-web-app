import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { makeStyles } from '@material-ui/core/styles'
import MoreIcon from '@material-ui/icons/MoreVert'
import Button from '@material-ui/core/Button'
import { Link, NavLink } from 'react-router-dom'
import TopBarSearchField from '../../main_layout/TopBarSearchField'
import TopBarInfoButton from './TopBarInfoButton'
import TopBarLanguageButton from '../../main_layout/TopBarLanguageButton'
import Divider from '@material-ui/core/Divider'
import { has } from 'lodash'
import findSampoLogo from '../../../img/findsampo/logo.png'
import secoLogo from '../../../img/logos/seco-logo-48x50.png'
import { showLanguageButton, feedbackLink } from '../../../configs/findsampo/GeneralConfig'

const mobileMenuBreakPoint = 1100

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  toolbar: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5)
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up(mobileMenuBreakPoint)]: {
      display: 'flex'
    }
  },
  link: {
    textDecoration: 'none'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up(mobileMenuBreakPoint)]: {
      display: 'none'
    }
  },
  homeButtonText: {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  appBarButton: {
    whiteSpace: 'nowrap',
    color: 'white !important',
    border: `1px solid ${theme.palette.primary.main}`
  },
  appBarButtonActive: {
    border: '1px solid white'
  },
  appBarDivider: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderLeft: '2px solid white'
  },
  secoLogo: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  mainLogo: {
    height: 40,
    marginRight: theme.spacing(1)
  },
  mainLogoText: {
    textTransform: 'none'
  },
  mainLogoTypography: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

/**
 * Responsive app bar with a search field, perspective links, info links and a language
 * selector. Based on Material-UI's App Bar component.
 */
const TopBar = props => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const { perspectives, currentLocale, availableLocales, rootUrl } = props
  const classes = useStyles()
  const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget)
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null)

  // https://material-ui.com/components/buttons/#third-party-routing-library
  const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />)
  const AdapterNavLink = React.forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />)

  const getInternalLink = perspective => {
    const searchMode = has(perspective, 'searchMode') ? perspective.searchMode : 'faceted-search'
    let link = null
    if (searchMode === 'dummy-internal') {
      link = `${props.rootUrl}${perspective.internalLink}`
    }
    if (searchMode !== 'dummy-internal') {
      link = `${props.rootUrl}/${perspective.id}/${searchMode}`
    }
    return link
  }

  const renderMobileMenuItem = perspective => {
    // if (has(perspective, 'externalUrl') && perspective.id !== 'feedback') { return }
    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MenuItem>
            {perspective.label
              ? perspective.label.toUpperCase()
              : intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </MenuItem>
        </a>
      )
    } else {
      return (
        <MenuItem
          key={perspective.id}
          component={AdapterLink}
          to={getInternalLink(perspective)}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </MenuItem>
      )
    }
  }

  const renderDesktopTopMenuItem = perspective => {
    if (has(perspective, 'externalUrl') &&
    (perspective.id !== 'feedback' && perspective.id !== 'instructions')) {
      return
    }
    if (perspective.id === 'guides') {
      return
    }

    if (has(perspective, 'externalUrl')) {
      return (
        <a
          className={classes.link}
          key={perspective.id}
          href={perspective.externalUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            className={classes.appBarButton}
          >
            {perspective.label
              ? perspective.label
              : intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
          </Button>
        </a>
      )
    } else {
      const urlToMatch = perspective.searchMode === 'dummy-internal'
        ? `${props.rootUrl}${perspective.internalLink}`
        : `${props.rootUrl}/${perspective.id}`
      return (
        <Button
          key={perspective.id}
          className={classes.appBarButton}
          component={AdapterNavLink}
          to={getInternalLink(perspective)}
          isActive={(match, location) => location.pathname.startsWith(urlToMatch)}
          activeClassName={classes.appBarButtonActive}
        >
          {intl.get(`perspectives.${perspective.id}.label`).toUpperCase()}
        </Button>
      )
    }
  }

  const renderMobileMenu = perspectives =>
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {renderMobileMenuItem(perspectives[0])}
      {renderMobileMenuItem(perspectives[1])}
      {renderMobileMenuItem(perspectives[2])}
      <Divider />
      {renderMobileMenuItem({
        id: 'feedback',
        externalUrl: feedbackLink,
        label: intl.get('topBar.feedback')
      })}
      {renderMobileMenuItem({
        id: 'aboutFindSampo',
        externalUrl: intl.get('topBar.info.aboutFindSampoUrl'),
        label: intl.get('topBar.info.aboutFindSampo')
      })}
      {renderMobileMenuItem({
        id: 'blog',
        externalUrl: intl.get('topBar.info.blogUrl'),
        label: intl.get('topBar.info.blog')
      })}
      {renderMobileMenuItem(perspectives[3])}
      {renderMobileMenuItem({
        id: 'instructions',
        externalUrl: intl.get('topBar.instructionsUrl'),
        label: intl.get('topBar.instructions')
      })}
    </Menu>

  return (
    <div className={classes.root}>
      {/* Add an empty Typography element to ensure that that the MuiTypography class is loaded for
         any lower level components that use MuiTypography class only in translation files */}
      <Typography />
      <AppBar position='absolute'>
        <Toolbar className={classes.toolbar}>
          <Button
            component={AdapterLink} to='/'
            classes={{
              text: classes.mainLogoText
            }}
          >
            <img className={classes.mainLogo} src={findSampoLogo} />
            <Typography className={classes.mainLogoTypography} variant='h5'>{intl.get('appTitle.short')}</Typography>
          </Button>
          <TopBarSearchField
            fetchFullTextResults={props.fetchFullTextResults}
            clearResults={props.clearResults}
            xsScreen={props.xsScreen}
            rootUrl={rootUrl}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {perspectives.map((perspective, index) => renderDesktopTopMenuItem(perspective, index))}
            <div className={classes.appBarDivider} />
            {renderDesktopTopMenuItem({
              id: 'feedback',
              externalUrl: feedbackLink,
              label: intl.get('topBar.feedback')
            })}
            <TopBarInfoButton rootUrl={props.rootUrl} />
            {renderDesktopTopMenuItem({
              id: 'instructions',
              externalUrl: intl.get('topBar.instructionsUrl'),
              label: intl.get('topBar.instructions')
            })}
            {showLanguageButton &&
              <TopBarLanguageButton
                currentLocale={currentLocale}
                availableLocales={availableLocales}
                loadLocales={props.loadLocales}
                location={props.location}
              />}
          </div>
          <a
            className={classes.secoLogo}
            href='https://seco.cs.aalto.fi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button><img src={secoLogo} /></Button>
          </a>
          <div className={classes.sectionMobile}>
            {showLanguageButton &&
              <TopBarLanguageButton
                currentLocale={currentLocale}
                availableLocales={availableLocales}
                loadLocales={props.loadLocales}
                location={props.location}
              />}
            <IconButton aria-haspopup='true' onClick={handleMobileMenuOpen} color='inherit'>
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu(perspectives)}
    </div>
  )
}

TopBar.propTypes = {
  /**
   * Redux action for full text search results using the search field.
   */
  fetchFullTextResults: PropTypes.func.isRequired,
  /**
   * Redux action for clearing the full text results.
   */
  clearResults: PropTypes.func.isRequired,
  /**
   * Redux action for loading translations.
   */
  loadLocales: PropTypes.func.isRequired,
  /**
   * Current locale as a two-letter code
   */
  currentLocale: PropTypes.string.isRequired,
  /**
   * Available locales as an array of objects with two-letter codes as keys.
   */
  availableLocales: PropTypes.array.isRequired,
  /**
   * Perspective config as an array of objects.
   */
  perspectives: PropTypes.array.isRequired,
  /**
   * Flag for checking if the screen is extra small.
   */
  xsScreen: PropTypes.bool.isRequired,
  /**
   * React Router's location object. The perspective links are highlighted based on this.
   */
  location: PropTypes.object.isRequired,
  /**
   * Root url of the application.
   */
  rootUrl: PropTypes.string.isRequired
}

export default TopBar
