import React from 'react'

const cleanState = {
  name: '',
  body: '',
  rating: 6
}

const isValidReview = (review) => {
  if(review.name.length < 5) {
    return false
  }

  if(review.body.length <= 10 || review.body.length >= 149) {
    return false
  }

  if(Number.isFinite(review.rating) && review.rating >= 0 && review.rating < 7) {
    return false
  }

  return true
}

export default class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {...cleanState}
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const review = {...this.state}

    this.props.onSubmit(review)

    this.setState({
      ...cleanState
    })
  }

  handleChange = (field) => {
    return (event) => {
      const value = event.target.value

      this.setState({
        [field]: value
      })
    }
  }

  render() {
    return (
      <div className="newReview">
        <h3>New review</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="formControl">
            <label> 
              Name:
              <input onChange={this.handleChange("name")} type="text" value={this.state.name} placeholder="jimbob" />
            </label>
          </div>
          <div className="formControl">
            <label> 
              Review:
              <textarea onChange={this.handleChange("body")} value={this.state.body} placeholder="Astonishing.." />
            </label>
          </div>
          <div className="formControl">
            <label> 
              Rating:
              <input onChange={this.handleChange("rating")} value={this.state.rating} type="number" min="0" max="6" />
            </label>
          </div>
          <div className="formControl">
            <button disabled={!isValidReview(this.state)} type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
