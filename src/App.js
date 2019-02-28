import React, { Component } from 'react';

import WorkshopDetails from './WorkshopDetails';
import ReviewList from './ReviewList';

const reviews = [
  {
    id: 1,
    name: 'Jordan',
    rating: 6,
    body: 'very good'
  },
  {
    id: 2,
    name: 'Adam',
    rating: 6,
    body: 'mind blowing'
  }, 
  { id: 3,
    name: 'Mihai',
    rating: 3,
    body: 'ample'
  },
  {
    id: 4,
    name: 'Gary',
    rating: 6,
    body: 'insightful'
  },
  {
    id: 5,
    name: 'Boris',
    rating: 6,
    body: 'game changing'
  },
  {
    id: 5,
    name: 'Laurie',
    rating: -1,
    body: 'Dogshit'
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkshopDetails 
          title="Rad React Testing Workshop" 
          instructor="Shaun Dowling" 
          averageRating="5.0" 
        />
        <ReviewList reviews={reviews} />
      </div>
    );
  }
}

export default App;
