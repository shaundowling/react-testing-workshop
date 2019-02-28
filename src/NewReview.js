import React from 'react'

export default class NewReview extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      body: '',
      rating: 6
    }
  }

  render() {
    return (
      <div className="newReview">
        <h3>New review</h3>
        <form onSubmit={this.props.onSubmit}>
          <div className="formControl">
            <label> 
              Name:
              <input type="text" placeholder="jimbob" />
            </label>
          </div>
          <div className="formControl">
            <label> 
              Review:
              <textarea placeholder="Astonishing.." />
            </label>
          </div>
          <div className="formControl">
            <label> 
              Rating:
              <input type="number" min="0" max="6" />
            </label>
          </div>
          <div className="formControl">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
