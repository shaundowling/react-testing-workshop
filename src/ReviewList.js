import React from 'react'
import ReviewItem from './ReviewItem'

export default class ReviewList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: props.reviews
    }
  }

  render () {
    return (
      <div className="reviewList">
        {this.state.reviews.map((review, idx) => (
          <ReviewItem review={review} key={idx} />
        ))}
      </div>
    )
  }
}
