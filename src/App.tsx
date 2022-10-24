import React from 'react';

import './App.css';
import {Stars} from './component/star/Stars';
import {Accordion} from './component/accordion/Accordion';
import {Rating} from './component/rating/Rating';

function App() {
  return (
    <div className="App">
      <Stars/>
      <Stars/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

export default App;
