import React from 'react'
import intl from 'react-intl-universal'
import {
  Card,
  // CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import FHA060 from '../../../img/findsampo/Museovirasto_060-vaaka.jpg'
import FHA043 from '../../../img/findsampo/Museovirasto_043-vaaka.jpg'
import FHA054 from '../../../img/findsampo/Museovirasto_054-vaaka.jpg'
import FHA062 from '../../../img/findsampo/Museovirasto_062_vaaka.jpg'
import FHA063 from '../../../img/findsampo/Museovirasto_063_vaaka.jpg'
// import FHA067 from '../../../img/findsampo/Museovirasto_067-vaaka.jpg'
import FHA056 from '../../../img/findsampo/Museovirasto_056_vaaka.jpg'

const fourCardsBreakpoint = 1335

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.down(fourCardsBreakpoint)]: {
      alignItems: 'flex-start'
    },
    [theme.breakpoints.up(fourCardsBreakpoint)]: {
      alignItems: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 56 // app bar
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: 64 // app bar
    },
    overflow: 'auto',
    backgroundImage: `radial-gradient(ellipse at center, rgba(194,194,194,0.50) 15%, rgb(191, 191, 191) 100%), url(${FHA062})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  infoCard: {
    [theme.breakpoints.down(fourCardsBreakpoint)]: {
      maxHeight: 350
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    maxWidth: 350,
    margin: theme.spacing(1.5)
  },
  infoCardMedia: {
    height: 140
  },
  link: {
    textDecoration: 'none'
  }
}))

const cardData = [
  {
    id: 'whatShoulIDo',
    image: FHA063
  },
  {
    id: 'reportingADiscovery',
    image: FHA056
  },
  {
    id: 'archaelogyAsAHobby',
    image: FHA043
  },
  {
    id: 'enthusiastsGuide',
    image: FHA054
  }
]

const InfoCards = props => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {cardData && cardData.map((card, index) => (
        <Card key={index} className={classes.infoCard}>
          <CardMedia
            className={classes.infoCardMedia}
            image={card.image}
            title={intl.get(`perspectives.guides.${card.id}.title`)}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {intl.get(`perspectives.guides.${card.id}.title`)}
            </Typography>
            {/* <Typography component='p'>
              {intl.get(`perspectives.guides.${card.id}.description`)}
            </Typography> */}
          </CardContent>
          <CardActions>
            <a
              className={classes.link}
              href={intl.get(`perspectives.guides.${card.id}.link`)}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button size='small' color='primary'>
                {intl.get('mainPage.cardLearnMore')}
              </Button>
            </a>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default InfoCards
