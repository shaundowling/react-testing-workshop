import React from 'react'
import tracking from './tracking'

export const LikeButton = () => (
  <button onClick={ () => tracking.sendEvent("Like button clicked") } />
)


