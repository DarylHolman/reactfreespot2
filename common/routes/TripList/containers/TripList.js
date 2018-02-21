import { provideHooks } from 'redial'
import React, { PropTypes } from 'react'
import { loadTrips } from '../actions'
import { connect } from 'react-redux'
import TripListItem from '../components/TripListItem'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'
import { selectTrips } from '../reducer'

import { GridList } from 'material-ui/GridList'
import Subheader from 'material-ui/Subheader'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadTrips())
}

const mapStateToProps = state => ({
  trips: selectTrips(state)
})

  //         const ItemInput = ({ trips }) => (
  // <div className={css(styles.root)}>
  //   {trips.isLoading &&
  //     <div>
  //       <h2 className={css(styles.title)}>Loading....</h2>
  //       <fieldset className="form-group">
  //         <label></label>
  //         <input className="form-control" type="title" placeholder="Item Name"{...password} />
  //         <div>}
  //         <fieldset className="form-group">
  //         <label></label>
  //         <input className="form-control" type="password" placeholder="Item Description"{...password} />
  //         </div>}
  //       </fieldset>
  //     </div>}
  //     </div>

const TripListPage = ({ trips }) => (
  <div className={css(styles.root)}>
    <Helmet title='Explore' />
    {trips.isLoading &&
      <div>
        <h2 className={css(styles.title)}>Loading....</h2>
      </div>}
    {!trips.isLoading &&
      <GridList
        cellHeight={240}
        cols={4}
        className={css(styles.gridList)}
      >
        <Subheader className={css(styles.subheader)}>My Items</Subheader>
        {trips.data.slice(0,4).reverse().map((trip, i) => <TripListItem key={trip.id} trip={trip} />)}
      </GridList>}
    {!trips.isLoading &&
      <GridList
        cellHeight={240}
        cols={4}
        className={css(styles.gridList)}
      >
        <Subheader className={css(styles.subheader)}>Saved Items</Subheader>
        {trips.data.map((trip, i) => <TripListItem key={trip.id} trip={trip} />)}
      </GridList>}
    {!trips.isLoading &&
      <GridList
        cellHeight={240}
        cols={4}
        className={css(styles.gridList)}
      >
        <Subheader className={css(styles.subheader)}>Public Feed</Subheader>
        {trips.data.map((trip, i) => <TripListItem key={trip.id} trip={trip} />)}
      </GridList>}
  </div>
)

TripListPage.PropTypes = {
  trips: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  root: {
    // maxWidth: 500,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: '-1.5rem'
  },
  gridList: {
    // width: 500,
    // height: 450,
    overflowY: 'auto'
  },
  subheader: {
    fontSize: 18,
    marginTop: '1.5rem'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(TripListPage))
