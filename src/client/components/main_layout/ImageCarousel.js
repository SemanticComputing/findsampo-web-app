import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { makeStyles } from '@material-ui/core/styles'

// const DESKTOP_SCREEN_PERSENTAGE = 30
// const MOBILE_SCREEN_PERSENTAGE = 95

const useStyles = makeStyles(theme => ({
  itemContainer: {
    background: 'rgb(247, 247, 247)',
    transition: 'transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1)'
  },
  carouselImage: {
    height: 200,
    maxWidth: 250,
    objectFit: 'cover',
    borderRadius: 25
  }
}))

const sampleItems = [
  {
    desc: 'Neulahakaisia, Imatra',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40039-131.JPG'
  },
  {
    desc: 'Kehäsolki, Imatea',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40039-118.JPG'
  },
  {
    desc: 'Miekanpansi, Asikkala',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40932_1a.JPG'
  },
  {
    desc: 'Kantasormus, Haapavesi',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40548-1.JPG'
  },
  {
    desc: 'Linturiipus, Hattula',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40449-2.jpg'
  },
  {
    desc: 'Rengaskuolaimet, Vesilahti',
    imgSrc: 'http://luettelointi.nba.fi/assets/uploads/find_images/40548-1.JPG'
  }
]

const ImageCarousel = pros => {
  const classes = useStyles()
  return (
    <Carousel
      centerMode
      emulateTouch
      autoPlay
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      showArrows
      centerSlidePercentage={30}
    >
      {
        sampleItems.map((item, index) => (
          <div key={index} className={classes.itemContainer}>
            <img className={classes.carouselImage} src={item.imgSrc} />
          </div>
        ))
      }
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  items: PropTypes.array
}

export default ImageCarousel
