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
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>

    </div>
  );
}

export default App;
