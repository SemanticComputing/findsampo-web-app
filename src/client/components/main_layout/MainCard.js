import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import intl from 'react-intl-universal'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Link } from 'react-router-dom'
import { has } from 'lodash'
import defaultImage from '../../img/main_page/thumb.png'

const useStyles = makeStyles(theme => ({
  gridItem: props => ({
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center'
    },
    height: props.perspective.frontPageImage ? 200 : 150,
    [props.perspective.frontPageElement === 'card']: {
      // height: 'inherit',
      // width: 200,
      // // maxWidth: 269,
      // // minWidth: 269
    }
  }),
  perspectiveCardPaper: props => ({
    padding: theme.spacing(1.5),
    boxSizing: 'border-box',
    height: '100%',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '75%'
    },
    '&:hover': {
      background: 'linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) )'
    },
    ...(props.perspective.frontPageImage && {
      color: '#fff',
      background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url(${props.perspective.frontPageImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      '&:hover': {
        background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${props.perspective.frontPageImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }
    })
  }),
  cardMedia: {
    height: 100
  },
  cardContent: {
    height: 90
  },
  card: {
    width: '100%'
  }
}))

/**
 * A component for generating a Material-UI Card for a perspective on the portal's landing page.
 */
const MainCard = props => {
  const classes = useStyles(props)
  const { perspective, cardHeadingVariant } = props
  const xsScreen = useMediaQuery(theme => theme.breakpoints.down('xs'))
  // const smScreen = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'))
  const externalPerspective = has(perspective, 'externalUrl')
  let card = has(perspective, 'frontPageElement') && perspective.frontPageElement === 'card' && perspective.frontPageImage
  let simple = false
  if (perspective.frontPageImage == null) {
    simple = true
    card = false
  }
  const searchMode = has(perspective, 'searchMode') ? perspective.searchMode : 'faceted-search'
  let link = null
  if (!externalPerspective && searchMode === 'dummy-internal') {
    link = `${props.rootUrl}${perspective.internalLink}`
  }
  if (!externalPerspective && searchMode !== 'dummy-internal') {
    link = `${props.rootUrl}/${perspective.id}/${searchMode}`
  }

  return (
    <Grid
      className={classes.gridItem}
      key={perspective.id}
      item xs={12} sm={6} md={4}
      component={externalPerspective ? 'a' : Link}
      to={link}
      container={xsScreen}
      href={externalPerspective ? perspective.externalUrl : null}
      target={externalPerspective ? '_blank' : null}
      rel={externalPerspective ? 'noreferrer' : null}
    >
      {!card && !simple &&
        <Paper className={classes.perspectiveCardPaper}>
          <Typography gutterBottom variant={cardHeadingVariant} component='h2'>
            {intl.get(`perspectives.${perspective.id}.label`)}
          </Typography>
          <Typography component='p'>
            {intl.get(`perspectives.${perspective.id}.shortDescription`)}
          </Typography>
        </Paper>}
      {simple &&
        <div className={classes.perspectiveCardPaper}>
          <Typography align='center' gutterBottom variant={cardHeadingVariant} component='h2'>
            {intl.get(`perspectives.${perspective.id}.label`)}
          </Typography>
          <Typography align='center' component='p'>
            {intl.get(`perspectives.${perspective.id}.shortDescription`)}
          </Typography>
        </div>}
      {card &&
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.cardMedia}
              image={has(perspective, 'frontPageImage')
                ? perspective.frontPageImage
                : defaultImage}
              title={intl.get(`perspectives.${perspective.id}.label`)}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant='h5' component='h2'>
                {intl.get(`perspectives.${perspective.id}.label`)}
              </Typography>
              <Typography component='p'>
                {intl.get(`perspectives.${perspective.id}.shortDescription`)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>}
    </Grid>
  )
}

MainCard.propTypes = {
  perspective: PropTypes.object.isRequired,
  cardHeadingVariant: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default MainCard
