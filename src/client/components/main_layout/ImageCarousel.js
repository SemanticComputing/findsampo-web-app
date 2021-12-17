import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import history from '../../History'

// const DESKTOP_SCREEN_PERSENTAGE = 30
// const MOBILE_SCREEN_PERSENTAGE = 95

const useStyles = makeStyles(theme => ({
  itemContainer: {
    background: 'rgb(247, 247, 247)',
    transition: 'transform 420ms cubic-bezier(0.165, 0.84, 0.44, 1)',
    height: 270,
    cursor: 'pointer'
  },
  carouselImage: {
    maxWidth: 250,
    height: 200,
    objectFit: 'cover',
    borderRadius: 25
  },
  carouselImageCaption: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

const ImageCarousel = props => {
  const classes = useStyles()
  const { data } = props

  useEffect(() => {
    if (props.fetchData) {
      const { perspectiveID, resultClass } = props
      props.fetchData({
        perspectiveID,
        resultClass
      })
    }
  }, [])

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
      onClickItem={(index, item) => history.push(item.props.link)}
    >
      {data && data.featuredFind &&
        data.featuredFind.map((item, index) => (
          <div key={index} className={classes.itemContainer} link={item.dataProviderUrl}>
            <img
              className={classes.carouselImage}
              src={Array.isArray(item.imageURL) ? item.imageURL[0] : item.imageURL}
              alt={item.prefLabel}
            />
            <Typography className={classes.carouselImageCaption}>{item.prefLabel}</Typography>
          </div>
        ))}
    </Carousel>
  )
}

ImageCarousel.propTypes = {
  items: PropTypes.array
}

export default ImageCarousel
