import React, { Component } from 'react';

import WorkshopDetails from './WorkshopDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkshopDetails 
          title="Rad React Testing Workshop" 
          instructor="Shaun Dowling" 
          averageRating="5.0" 
        />
      </div>
    );
  }
}

export default App;
