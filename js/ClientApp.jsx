import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div className='app'>
    <div className='landing'>
      <h1>Video</h1>
      <input type='text' placeholder='Search'/>
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App/>, document.getElementById('app'));
