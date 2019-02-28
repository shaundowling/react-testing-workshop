import React, { Component } from 'react';

import ReviewService from './store/ReviewService'

import WorkshopDetails from './WorkshopDetails'
import ReviewList from './ReviewList'
import NewReview from './NewReview'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    const reviews = ReviewService.fetch()

    this.setState({
      reviews: reviews
    })
  }

  add = (review) => {
    const reviews = [...this.state.reviews]
    reviews.push(review)

    this.setState({
      reviews: reviews
    }, () => {
      ReviewService.persist(this.state.reviews)
    })
  }

  delete = (id) => {
    const reviews = [...this.state.reviews]
    reviews.splice(id, 1)

    this.setState({
      reviews: reviews
    }, () => {
      ReviewService.persist(this.state.reviews)
    })
  }

  calculateAverageRating = () => {
    const withRating = this.state.reviews.filter(review => (
      review.rating !== null && review.rating !== undefined
    ))

    const total = withRating.reduce((acc, review) => {
      acc += review.rating
      return acc
    }, 0)

    console.log(this.state.reviews, this.state.reviews.length)

    return Math.ceil(total / this.state.reviews.length)
  }

  render() {
    return (
      <div className="App">
        <WorkshopDetails 
          title="Rad React Testing Workshop" 
          instructor="Shaun Dowling" 
          averageRating={this.calculateAverageRating()}
        />
        <ReviewList onDelete={this.delete} reviews={this.state.reviews} />
        <NewReview onSubmit={this.add} />
      </div>
    );
  }
}

export default App;
