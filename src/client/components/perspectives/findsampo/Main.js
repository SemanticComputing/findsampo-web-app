import React from 'react'
import PropTypes from 'prop-types'
import intl from 'react-intl-universal'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import has from 'lodash'
import MainCard from './MainCard'
import ImageCarousel from '../../main_layout/ImageCarousel'
import { getSpacing } from '../../../helpers/helpers'
import bannerLogoEN from '../../../img/findsampo/large-logo-transparent-white-en.png'
import bannerLogoFI from '../../../img/findsampo/large-logo-transparent-white-fi.png'

/**
 * A component for generating a front page for a semantic portal.
 */
const Main = props => {
  const { perspectives, screenSize, layoutConfig } = props
  const actualPerspectives = []
  const additionalLinks = []
  perspectives.forEach(perspective => {
    if (perspective.externalUrl || perspective.id === 'guides') {
      additionalLinks.push(perspective)
    } else if (perspective.id !== 'fullTextSearch') {
      actualPerspectives.push(perspective)
    }
  })
  const { mainPage } = layoutConfig
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
    <Box
      sx={theme => {
        const defaultHeightReduction = layoutConfig.topBar.defaultHeight +
          layoutConfig.footer.defaultHeight + getSpacing(theme, 2)
        const reducedHeightReduction = layoutConfig.topBar.reducedHeight +
          layoutConfig.footer.reducedHeight + getSpacing(theme, 2)
        return {
          backgroundColor: '#ffffff',
          paddingBottom: theme.spacing(2),
          height: {
            hundredPercentHeight: `calc(100% - ${reducedHeightReduction}px)`,
            reducedHeight: `calc(100% - ${defaultHeightReduction}px)`
          },
          overflow: {
            hundredPercentHeight: 'auto'
          }
        }
      }}
    >
      <Box
        sx={theme => ({
          background: mainPage.bannerBackround,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: mainPage.bannerMobileHeight,
          [theme.breakpoints.up('md')]: {
            height: mainPage.bannerReducedHeight
          },
          [theme.breakpoints.up('xl')]: {
            height: mainPage.bannerDefaultHeight
          },
          // boxShadow: '0 -15px 15px 0px #bdbdbd inset',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        })}
      >
        <Box
          sx={{
            color: '#fff'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Box
              component='img'
              src={props.currentLocale === 'en' ? bannerLogoEN : bannerLogoFI}
              alt={`${intl.get('appTitle.short')} logo`}
              sx={theme => ({
                height: '90px',
                [theme.breakpoints.up('md')]: {
                  height: '150px'
                },
                [theme.breakpoints.up('xl')]: {
                  height: '240px'
                },
                marginBottom: theme.spacing(1)
              })}
            />
          </Box>
          <Box
            sx={theme => ({
              // marginTop: theme.spacing(1.5),
              ...(mainPage.wrapSubheading) && {
                [theme.breakpoints.up('md')]: {
                  display: 'flex',
                  '& div': {
                    flexGrow: 1,
                    width: 0
                  }
                }
              }
            })}
          >
            <Box>
              <Typography component='p' variant={subheadingVariant} align='center'>
                {intl.getHTML('appTitle.subheading')}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={theme => ({
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          [theme.breakpoints.up(1100 + getSpacing(theme, 6))]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        })}
      >
        <Box
          sx={theme => ({
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1)
          })}
        >
          <Typography variant={descriptionVariant} align='center' color='textPrimary'>
            {intl.get('selectPerspective')}
          </Typography>
        </Box>
        <Grid
          container spacing={screenSize === 'sm' ? 2 : 1}
          justifyContent={screenSize === 'xs' || screenSize === 'sm' ? 'center' : 'flex-start'}
        >
          {actualPerspectives.map(perspective => {
            const hideCard = (has(perspective.hideCardOnFrontPage) && perspective.hideCardOnFrontPage)
            if (!hideCard) {
              return (
                <MainCard
                  key={perspective.id}
                  perspective={perspective}
                  cardHeadingVariant='h5'
                  rootUrl={props.rootUrl}
                />
              )
            }
            return null
          })}
        </Grid>
        <Box
          sx={theme => ({
            paddingTop: theme.spacing(1)
          })}
        >
          <Typography variant={descriptionVariant} align='center' color='textPrimary'>
            {intl.get('selectPerspectiveExternal')}
          </Typography>
        </Box>
        <Grid
          container spacing={screenSize === 'sm' ? 2 : 1}
          justifyContent='center'
        >
          {additionalLinks.map(perspective => {
            const hideCard = (has(perspective.hideCardOnFrontPage) && perspective.hideCardOnFrontPage)
            if (!hideCard) {
              return (
                <MainCard
                  key={perspective.id}
                  perspective={perspective}
                  cardHeadingVariant='h5'
                  rootUrl={props.rootUrl}
                />
              )
            }
            return null
          })}
        </Grid>

      </Box>
      {screenSize !== 'xs' &&
        <Box
          sx={theme => ({
            background: 'rgb(247, 247, 247)',
            paddingBottom: theme.spacing(2)
          })}
        >
          <Box
            sx={theme => ({
              display: 'flex',
              justifyContent: 'center',
              paddingTop: theme.spacing(1.5),
              paddingBottom: theme.spacing(1.5)
            })}
          >

            <Typography
              sx={theme => ({
                color: theme.palette.primary.main,
                fontWeight: 'bold',
                fontSize: '1.2rem'
              })}
            >
              {intl.get('mainPage.carouselHeading')}
            </Typography>
          </Box>
          <ImageCarousel
            perspectiveID='finds'
            resultClass='findsKnowledgeGraphMetadata'
            fetchData={props.fetchKnowledgeGraphMetadata}
            data={props.knowledgeGraphMetadata}
          />
        </Box>}
      <Box
        sx={theme => ({
          marginTop: theme.spacing(2)
        })}
      >
        <Typography
          align='center'
          sx={theme => ({
            fontSize: '0.7em'
          })}
        >
          {intl.getHTML('mainPageImageLicenceTitle')}
        </Typography>
        <Typography
          align='center'
          sx={theme => ({
            marginTop: theme.spacing(1),
            fontSize: '0.7em'
          })}
        >
          {intl.getHTML('mainPageImageLicence')}
        </Typography>
      </Box>
    </Box>
  )
}

Main.propTypes = {
  /**
   * An array of objects used for configuration. Each object represents a single perspective.
   */
  perspectives: PropTypes.array.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Main
