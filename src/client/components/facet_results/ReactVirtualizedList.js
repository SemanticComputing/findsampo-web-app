import React, { useEffect } from 'react'
import { List, AutoSizer } from 'react-virtualized'
import { makeStyles } from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import intl from 'react-intl-universal'
import { Link } from 'react-router-dom'
// import noImage from '../../img/findsampo/no_image.png'
import CircularProgress from '@material-ui/core/CircularProgress'
import purple from '@material-ui/core/colors/purple'

const useStyles = makeStyles(theme => ({
  root: props => {
    return {
      marginTop: theme.spacing(1),
      maxWidth: 350,
      [theme.breakpoints.down('md')]: {
        height: window.innerHeight - 56 - 61 - 48 - 48 - 72 - theme.spacing(5)
      },
      [theme.breakpoints.up('md')]: {
        height: 'calc(100% - 80px)'
      },
      fontFamily: 'Roboto'
    }
  },
  list: {
    [theme.breakpoints.up('md')]: {
      paddingRight: 4
    }
  },
  link: {
    textDecoration: 'none'
  },
  progressContainer: {
    width: '100%',
    height: 600,
    [theme.breakpoints.up('md')]: {
      height: 'calc(100% - 80px)'
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

const ReactVirtualizedList = props => {
  const classes = useStyles(props)
  const { results } = props.facetResults

  useEffect(() => {
    props.fetchResults({
      resultClass: props.resultClass,
      facetClass: props.facetClass
    })
  }, [])

  useEffect(() => {
    const { facetUpdateID } = props
    if (facetUpdateID > 0) {
      props.fetchResults({
        resultClass: props.resultClass,
        facetClass: props.facetClass
      })
    }
  }, [props.facetUpdateID])

  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style // Style object to be applied to row (to position it)
  }) => {
    const data = props.facetResults.results[index]
    let image = null
    if (data.imageURL) {
      const { imageURL } = data
      image = imageURL.includes(', ') ? imageURL.split(', ').[0] : imageURL
    }
    return (
      <div className={classes.rowRoot} key={key} style={style}>
        <Link className={classes.link} to={data.dataProviderUrl}>
          <Card>
            <CardActionArea>
              {image &&
                <CardMedia
                  component='img'
                  alt='Kuva löydöstä'
                  height='140'
                  image={image}
                  title='Kuva löydöstä'
                />}
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {data.findName}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <strong>{intl.get('perspectives.finds.properties.objectType.label')}: </strong>
                  {data.objectType}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <strong>{intl.get('perspectives.finds.properties.material.label')}: </strong>
                  {data.material}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <strong>{intl.get('perspectives.finds.properties.period.label')}: </strong>
                  {data.period}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  <strong>{intl.get('perspectives.finds.properties.municipality.label')}: </strong>
                  {data.municipality}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      </div>
    )
  }

  const getRowHeight = ({ index }) => {
    const data = props.facetResults.results[index]
    let height = 300
    if (!data.imageURL) {
      height -= 140
    }
    if (data.findName.length > 26) {
      height += 32
    }
    if (data.findName.length > 40) {
      height += 54
    }
    if (data.period) {
      const limit = window.innerWidth < 328 ? 25 : 34
      if (data.period.length > limit) {
        height += 20
      }
    }
    return height
  }

  // if (props.facetResults.results) {
  //   props.facetResults.results.map(r => {
  //     if (r.period && r.period.length > 33) {
  //       console.log(r)
  //     }
  //   })
  // }

  return (
    <div className={classes.root}>
      {(!results || props.facetResults.results.fetching)
        ? (
          <div className={classes.progressContainer}>
            <CircularProgress style={{ color: purple[500] }} thickness={5} />
          </div>
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <List
                className={classes.list}
                height={height}
                width={width}
                rowCount={results.length}
                rowHeight={getRowHeight}
                rowRenderer={rowRenderer}
              />
            )}
          </AutoSizer>
        )}
    </div>
  )
}

export default ReactVirtualizedList
