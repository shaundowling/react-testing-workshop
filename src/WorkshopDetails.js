import React from 'react'
import DurationTimer from './DurationTimer'

const WorkshopDetails = ({title, instructor, averageRating}) => (
  <div className="workshopDetails">
    <h2>{ title }</h2>
    <h3>{ instructor }</h3>
    <DurationTimer />
    <div className="averageRating">
      {averageRating}
    </div>
  </div>
)

export default WorkshopDetails
