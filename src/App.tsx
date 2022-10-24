import React from 'react';
import './App.css';
import {Accordion} from './component/accordion/Accordion';
import {Rating} from './component/rating/Rating';
import {AppTitle} from './component/title_app/AppTitle';
import {Stars} from './component/star/Stars';

function App() {
  return (
    <div className="App">
      <Stars/>
      <Stars/>
      <AppTitle/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

export default App;
