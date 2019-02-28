import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


window.clearReviews = () => {
  window.localStorage.removeItem('reviews')
}

window.hydrateReviews = () => {
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

  window.localStorage.setItem('reviews', JSON.stringify(reviews))
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
