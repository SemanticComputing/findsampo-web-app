import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import MainCard from '../../main_layout/MainCard'
import bannerImage from '../../../img/findsampo/main-banner.jpg'
import bannerLogoEN from '../../../img/findsampo/large-logo-transparent-white-en.png'
import bannerLogoFI from '../../../img/findsampo/large-logo-transparent-white-fi.png'
// import bannerLogoEN from '../../../img/findsampo/large-logo-transparent-black-en.png'
// import bannerLogoFI from '../../../img/findsampo/large-logo-transparent-black-fi.png'
import ImageCarousel from '../../main_layout/ImageCarousel'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 'calc(100% - 74px)',
    backgroundColor: '#ffffff'
  },
  banner: {
    background: `linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50) ), url(${bannerImage})`,
    // background: `radial-gradient(ellipse at center, rgba(194,194,194,0.35) 70%, rgb(191, 191, 191) 100%), url(${bannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 225,
    [theme.breakpoints.up('xl')]: {
      height: 370
    },
    width: '100%',
    // boxShadow: '0 -15px 15px 0px #bdbdbd inset',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: theme.spacing(2)
  },
  bannerLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '73%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      height: '70%'
    }
  },
  bannerLogo: {
    maxHeight: '100%'
  },
  bannerSubheading: {
    width: '100%',
    color: '#fff'
    // color: '#000'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(1100 + theme.spacing(6))]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  licenceText: {
    marginTop: theme.spacing(0.5),
    fontSize: '0.7em'
  },
  lowerRow: {
    marginTop: theme.spacing(1)
  },
  selectInternalPerspective: {
    marginBottom: theme.spacing(1)
  },
  selectExternalPerspective: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1.5)
  },
  licenceTextContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center'
  },
  carouselSection: {
    background: 'rgb(247, 247, 247)',
    paddingBottom: theme.spacing(3)
  },
  carouselHeadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(1.5)
    // paddingBottom: theme.spacing(1)
  },
  carouselHeading: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  carouselContainer: {
    // marginTop: theme.spacing(2)
  }
}))

const Main = props => {
  const { perspectives, screenSize } = props
  const actualPerspectives = []
  const additionalLinks = []
  perspectives.map(perspective => {
    if (perspective.externalUrl || perspective.id === 'guides') {
      additionalLinks.push(perspective)
    } else {
      actualPerspectives.push(perspective)
    }
  })
  const classes = useStyles(props)
  // let headingVariant = 'h5'
  let subheadingVariant = 'body1'
  let descriptionVariant = 'body1'
  switch (screenSize) {
    case 'xs':
      // headingVariant = 'h5'
      subheadingVariant = 'body1'
      descriptionVariant = 'body1'
      break
    case 'sm':
      // headingVariant = 'h4'
      subheadingVariant = 'h6'
      descriptionVariant = 'h6'
      break
    case 'md':
      // headingVariant = 'h3'
      subheadingVariant = 'h6'
      descriptionVariant = 'h6'
      break
    case 'lg':
      // headingVariant = 'h2'
      subheadingVariant = 'h5'
      descriptionVariant = 'h6'
      break
    case 'xl':
      // headingVariant = 'h1'
      subheadingVariant = 'h4'
      descriptionVariant = 'h6'
      break
  }

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <div className={classes.bannerLogoContainer}>
          <img className={classes.bannerLogo} src={props.currentLocale === 'en' ? bannerLogoEN : bannerLogoFI} />
        </div>
        <div className={classes.bannerSubheading}>
          <Typography component='h2' variant={subheadingVariant} align='center'>
            {intl.getHTML('appTitle.subheading')}
          </Typography>
        </div>
      </div>
      <div className={classes.layout}>
        <Typography className={classes.selectInternalPerspective} variant={descriptionVariant} align='center' color='textPrimary' paragraph>
          {intl.get('selectPerspective')}
        </Typography>
        <Grid
          container spacing={screenSize === 'sm' ? 2 : 1}
          justify='center'
        >
          {actualPerspectives.map(perspective =>
            <MainCard
              key={perspective.id}
              perspective={perspective}
              cardHeadingVariant='h4'
              rootUrl={props.rootUrl}
            />)}
        </Grid>
        <Typography className={classes.selectExternalPerspective} variant={descriptionVariant} align='center' color='textPrimary'>
          {intl.get('selectPerspectiveExternal')}
        </Typography>
        <Grid
          container spacing={screenSize === 'sm' ? 2 : 1}
          justify='center'
        >
          {additionalLinks.map(perspective =>
            <MainCard
              key={perspective.id}
              perspective={perspective}
              cardHeadingVariant='h4'
              rootUrl={props.rootUrl}
            />)}
        </Grid>
      </div>
      <div className={classes.carouselSection}>
        <div className={classes.carouselHeadingContainer}>
          <Typography className={classes.carouselHeading}>{intl.get('mainPage.carouselHeading')}</Typography>
        </div>
        <div className={classes.carouselContainer}>
          <ImageCarousel
            resultClass='findsKnowledgeGraphMetadata'
            fetchData={props.fetchKnowledgeGraphMetadata}
            data={props.knowledgeGraphMetadata}
          />
        </div>
      </div>
      <div className={classes.licenceTextContainer}>
        <Typography className={classes.licenceText}>{intl.getHTML('mainPageImageLicence')}</Typography>
      </div>
      {/* <InfoCards /> */}
    </div>
  )
}

Main.propTypes = {
  perspectives: PropTypes.array.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Main
