import React from 'react'
import intl from 'react-intl-universal'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  infoCardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infoCard: {
    maxWidth: 350,
    margin: theme.spacing(1.5)
  },
  infoCardMedia: {
    height: 140
  }
}))

const sampleData = [
  {
    title: 'What should I do if I find an antiquity?',
    description: 'If you find an object from the ground and you suspect it may be an antiquity, retrieve it and make a note of the exact location where the object was found.',
    image: 'https://www.museovirasto.fi/uploads/Arkeologiset_kokoelmat/_1600xAUTO_crop_center-center/Museovirasto_043-vaaka.jpg'
  },
  {
    title: 'Archaeological collections of the Finnish Heritage Agency',
    description: 'Archaeological collections contain objects from the whole current territory of Finland as well as from the so-called ceded areas. The collections cover the whole prehistoric era extensively.',
    image: 'https://www.museovirasto.fi/uploads/Arkeologiset_kokoelmat/_1600xAUTO_crop_center-center/Museovirasto_056_vaaka.jpg'
  },
  {
    title: 'Enthusiast´s guide, Updated 2019',
    description: 'The archaeological collections of the historical era have been catalogued in the historical item collections of the National Museum of Finland until the end of 2010.',
    image: 'https://www.museovirasto.fi/uploads/Meista/_1600xAUTO_crop_center-center/Museovirasto_054-vaaka.jpg'
  }
]

const InfoCards = props => {
  const classes = useStyles()
  const cardData = sampleData
  return (
    <div className={classes.infoCardsContainer}>
      {cardData && cardData.map((data, index) => (
        <Card key={index} className={classes.infoCard}>
          <CardActionArea>
            <CardMedia
              className={classes.infoCardMedia}
              image={data.image}
              title={data.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {data.title}
              </Typography>
              <Typography component='p'>
                {data.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              {intl.get('mainPage.cardLearnMore')}
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default InfoCards
