import React from 'react';
import ReactDOM from 'react-dom';
import Link from './Link.react';

const node = document.getElementById('app');
ReactDOM.render(
  <div>
    <h3>I'm React</h3>
    <p>This is pretty awesome</p>
    <Link page="https://www.satyambnsal.com">Author Site</Link>
  </div>,
  node
);
