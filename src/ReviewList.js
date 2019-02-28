import React from 'react'
import ReviewItem from './ReviewItem'

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="reviewList">
        {this.props.reviews.length > 0 ?
          this.props.reviews.map((review, idx) => (
            <ReviewItem onDelete={() => { this.props.onDelete(idx) }} review={review} key={idx} />
          ))
        :
          <div className="noDataMessage">There are no reviews, use the form below to add one</div>
        }
      </div>
    )
  }
}
