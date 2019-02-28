import React from 'react'
import DurationTimer from './DurationTimer'
import Rating from './Rating'

const WorkshopDetails = ({title, instructor, averageRating}) => (
  <div className="workshopDetails">
    <h2>{ title }</h2>
    <h3>{ instructor }</h3>
    <DurationTimer />
    <div className="averageRating">
      <label>
        Average Rating
        <Rating value={averageRating} />
      </label>
    </div>
  </div>
)

export default WorkshopDetails
