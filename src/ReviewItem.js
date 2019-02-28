import React from 'react'
import Rating from './Rating'

export default class ReviewItem extends React.Component {
  render () {
    return (
      <div className="reviewItem">
        <p>
          <Rating value={this.props.review.rating} /> <strong>{this.props.review.name}</strong>: {this.props.review.body}
        </p>
        <div className="reviewActions">
          <button onClick={this.props.onDelete}>Delete</button>
        </div>
      </div>
    )
  }
}
