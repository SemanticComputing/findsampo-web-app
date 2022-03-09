import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import intl from 'react-intl-universal'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import makeStyles from '@mui/styles/makeStyles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from 'react-router-dom'
import { has } from 'lodash'
import defaultImage from '../../../img/main_page/thumb.png'

const useStyles = makeStyles(theme => ({
  gridItem: props => ({
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    height: 228,
    [theme.breakpoints.down('md')]: {
      height: 170,
      maxWidth: 300
    },
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
    width: '100%'
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
  const xsScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))
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
          <Typography
            gutterBottom
            variant={cardHeadingVariant}
            component='h2'
            sx={{ color: '#fff' }}
          >
            {intl.get(`perspectives.${perspective.id}.label`)}
          </Typography>
          <Typography
            component='p'
            sx={{ color: '#fff' }}
          >
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
