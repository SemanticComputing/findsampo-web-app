import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(3)
  },
  tableContainer: {
    maxWidth: 550
  }
}))

const KnowledgeGraphMetadataTable = props => {
  const classes = useStyles()

  useEffect(() => {
    if (props.fetchKnowledgeGraphMetadata) {
      const { resultClass } = props
      props.fetchKnowledgeGraphMetadata({ resultClass })
    }
  }, [])

  const data = props.knowledgeGraphMetadata && props.knowledgeGraphMetadata.databaseDump
    ? props.knowledgeGraphMetadata.databaseDump : []

  return (
    <div className={classes.root}>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Database</TableCell>
              <TableCell>Data dump date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell component='th' scope='row'>
                  <a
                    target='_blank' rel='noopener noreferrer'
                    href={row.dataProviderUrl}
                  >
                    {row.prefLabel}
                  </a>
                </TableCell>
                <TableCell>{row.modified}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

KnowledgeGraphMetadataTable.propTypes = {
  fetchKnowledgeGraphMetadata: PropTypes.func,
  knowledgeGraphMetadata: PropTypes.object,
  resultClass: PropTypes.string
}

export default KnowledgeGraphMetadataTable
