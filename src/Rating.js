import React from 'react'

const Rating = ({value}) => {

  let v = 0

  if(value > 6) {
    v = 6
  } else if (value < 0) {
    v = 0
  } else {
    v = value
  }

  console.log(v)

  return (
    <span className="rating">
      {"🍕".repeat(v)}
    </span>
  )
}

export default Rating
